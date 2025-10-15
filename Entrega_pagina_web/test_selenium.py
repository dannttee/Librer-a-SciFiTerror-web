import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
 
 
 
def test1(driver):
    element1 = driver.find_element(By.ID, "correo")
    print(element1.text)
    element1.click()
    element1.send_keys("asd@asd.asd")
 
 
    element2 = driver.find_element(By.ID, "contrasena")
    print(element2.text)
    element2.click()
    element2.send_keys("asd12345")
 
 
    time.sleep(1)  # Pause to see the result
 
 
    # element3 = driver.find_element(By.CLASS_NAME, "btn btn-success w-100")
    element3 = driver.find_element(By.CSS_SELECTOR, "button[type='submit']")
    print(element3.text)
    element3.click()
 
 
    element4 = driver.find_element(By.ID, "correoError")
    print(element4.text)
    print(repr(element4.text))
    assert element4.text == "Por favor ingresa un correo válido con dominio @duoc.cl, @profesor.duoc.cl o @gmail.com y máximo 100 caracteres."

 
 
    time.sleep(1)  # Pause to see the result
    
    print("Current URL:")
    print(driver.current_url)
    link_element = driver.find_element(By.LINK_TEXT, "Bati-Duoc")
    print(link_element.text)
    link_element.click()
 
 
    print("Current URL:")
    print(driver.current_url)
    WebDriverWait(driver, 10).until(EC.url_contains("https://dannttee.github.io/Librer-a-SciFiTerror-web/Entrega_pagina_web/Iniciar_sesion.html"))
    assert "https://dannttee.github.io/Librer-a-SciFiTerror-web/Entrega_pagina_web/Iniciar_sesion.html" in driver.current_url
    print("Segundo caso probado exitosamente. El sistema pasó a la página de inicio.")
 
 
    time.sleep(3)  # Pause to see the result
 
 
 
if __name__ == "__main__":   
    driver = webdriver.Chrome() # Or Firefox(), Edge(), etc.
    driver.get("https://dannttee.github.io/Librer-a-SciFiTerror-web/Entrega_pagina_web/Iniciar_sesion.html")
    test1(driver)
    driver.quit()