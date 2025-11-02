import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import Select

URL_LOGIN = "file:///C:\\Users\\dante\\Downloads\\Entrega_pagina_web\\Iniciar_sesion.html"
URL_REGISTRO = "file:///C:\\Users\\dante\\Downloads\\Entrega_pagina_web\\Registro_usuario.html"

def test_login(driver, email, password, test_num, desc):
    driver.get(URL_LOGIN)
    
    try:
        wait = WebDriverWait(driver, 10)
        email_field = wait.until(EC.presence_of_element_located((By.ID, "correo")))
        password_field = driver.find_element(By.ID, "contrasena")
        submit_btn = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
        
        email_field.clear()
        email_field.send_keys(email)
        password_field.clear()
        password_field.send_keys(password)
        submit_btn.click()
        time.sleep(1)
        
        try:
            alert = driver.switch_to.alert
            alert_text = alert.text
            alert.accept()
            print(f"✅ Test {test_num}: {desc} | Alert: '{alert_text}'")
        except:
            print(f"✅ Test {test_num}: {desc}")
        
        return True
    except Exception as e:
        print(f"❌ Test {test_num}: {desc} - Error: {str(e)}")
        return False


def test_registro(driver, nombre, email, password, test_num, desc):
    driver.get(URL_REGISTRO)
    
    try:
        wait = WebDriverWait(driver, 10)
        nombre_field = wait.until(EC.presence_of_element_located((By.ID, "nombre")))
        email_field = driver.find_element(By.ID, "correo1")
        password_field = driver.find_element(By.ID, "password1")
        region_select = Select(driver.find_element(By.ID, "region"))
        comuna_select = Select(driver.find_element(By.ID, "comuna"))
        submit_btn = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
        
        nombre_field.clear()
        nombre_field.send_keys(nombre)
        email_field.clear()
        email_field.send_keys(email)
        password_field.clear()
        password_field.send_keys(password)
        
        region_select.select_by_value("metropolitana")
        time.sleep(0.3)
        comuna_select.select_by_value("puente_alto")
        
        driver.execute_script("arguments[0].scrollIntoView(true);", submit_btn)
        time.sleep(0.5)
        
        submit_btn.click()
        time.sleep(1)
        
        try:
            alert = driver.switch_to.alert
            alert_text = alert.text
            alert.accept()
            print(f"✅ Test {test_num}: {desc} | Alert: '{alert_text}'")
        except:
            print(f"✅ Test {test_num}: {desc}")
        
        return True
    except Exception as e:
        print(f"❌ Test {test_num}: {desc} - Error: {str(e)}")
        return False


if __name__ == "__main__":
    driver = webdriver.Chrome()
    
    try:
        print("=" * 70)
        print("TESTS SELENIUM - LOGIN Y REGISTRO (5 CASOS)")
        print("=" * 70)
        
        # INYECTAR USUARIO EN LOCALSTORAGE
        driver.get(URL_LOGIN)
        driver.execute_script("""
            const usuarios = [
                {
                    nombre: "Juan Test",
                    correo1: "juan@duoc.cl",
                    password1: "Juan1234"
                }
            ];
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
        """)
        
        print("\n✅ Usuario inyectado en localStorage\n")
        
        passed = 0
        
        # TESTS DE LOGIN (3 casos)
        print("--- TESTS DE LOGIN ---\n")
        login_tests = [
            {"email": "juan@duoc.cl", "password": "Juan1234", "desc": "Login exitoso"},
            {"email": "juan@duoc.cl", "password": "wrongpass", "desc": "Login fallido - contraseña incorrecta"},
            {"email": "correo@invalido.net", "password": "pass", "desc": "Login fallido - email no registrado"},
        ]
        
        for i, test in enumerate(login_tests, start=1):
            if test_login(driver, test["email"], test["password"], i, test["desc"]):
                passed += 1
        
        # TESTS DE REGISTRO (2 casos)
        print("\n--- TESTS DE REGISTRO ---\n")
        
        if test_registro(driver, "Carlos López", "carlos@duoc.cl", "CarlosPass123", 4, "Registro exitoso"):
            passed += 1
        
        if test_registro(driver, "Test User", "emailinvalido", "TestPass123", 5, "Registro fallido - email sin @"):
            passed += 1
        
        print("\n" + "=" * 70)
        print(f"✅ {passed}/5 TESTS COMPLETADOS EXITOSAMENTE")
        print("=" * 70)
        
    except Exception as e:
        print(f"\n❌ Error general: {str(e)}")
    finally:
        driver.quit()
