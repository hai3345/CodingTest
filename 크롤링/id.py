"""from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
import sys
import io



browser = webdriver.Chrome('C:\chromedriver\chromedriver.exe')
url = "https://maple.gg/"
browser.get(url)
"""
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

# 크롬 드라이버 자동 업데이트

from webdriver_manager.chrome import ChromeDriverManager
# 브라우저 꺼짐 방지
chrome_options = Options()
chrome_options.add_experimental_option("detach", True)
# 불필요한 에러 메시지 없애기
chrome_options.add_experimental_option("excludeSwitches", ["enable-logging"])

service = Service(executable_path=ChromeDriverManager().install())
driver = webdriver.Chrome(service=service, options=chrome_options)

# 웹페이지 해당 주소 이동
driver.get("https://maplestory.nexon.com/Common/Guild?gid=18729&wid=45")
driver.implicitly_wait(10)

name_xpath = '//*[@id="app"]/div[2]/section[1]/form/div/div/div/input'
name = "날밤"

"""
driver.find_element(By.XPATH,name_xpath).send_keys("날밤")
driver.implicitly_wait(10)
driver.find_element(By.XPATH,'//*[@id="app"]/div[2]/section[1]/form/div/div/div/div/button').click()
driver.find_element(By.XPATH,'//*[@id="app"]/section/div/div[2]/div[2]/div/div[1]/a/div').click()
"""
#//*[@id="guild-content"]/section/div[3]/div[]/section/div[2]/b/a
