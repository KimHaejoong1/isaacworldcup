from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup

options = webdriver.ChromeOptions()
options.add_experimental_option("excludeSwitches", ["enable-logging"])
    #크롬 드라이버 생성
driver = webdriver.Chrome(options=options)
driver.implicitly_wait(3)

driver.get(url = '''https://namu.wiki/w/%EC%95%84%EC%9D%B4%EC%9E%91%EC%9D%98%20%EB%B2%88%EC%A0%9C/%EB%B3%B4%EC%8A%A4''')

html = driver.page_source
soup = BeautifulSoup(html, 'html.parser')
div = soup.find_all('strong')
cnt = 1
f = open('bossName.txt','w',encoding='utf-8')
for i in div:
    print(i)
    f.write(f'{i}\n')