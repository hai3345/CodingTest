from bs4 import BeautifulSoup
from selenium import webdriver
import time
import requests

url =requests.get('https://www.naver.com/')
soup = BeautifulSoup(url.content.decode('euc-kr', 'replace'), "html.parser")

print(soup)