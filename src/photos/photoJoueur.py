from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By
import io
from urllib.request import Request, urlopen


class GoogleBot:
    def __init__(self):
        self.bot = webdriver.Firefox()  

    def getToATP(self):
        bot = self.bot
        with open('joueurs-db.csv', 'r', encoding='utf-8') as in_file:
            for line in in_file:
                bot.get("https://www.atptour.com/")
                infos = line.split(';')
                nom = infos[0] +" "+ infos[1]

                link = self.bot.find_element_by_xpath('//*[@id="mainHeader"]/div/div[2]/div/nav/ul/li[4]/a')
                link.click()

                link2 = self.bot.find_element_by_xpath('//*[@id="playerInput"]')
                link2.click()
                link2.send_keys(infos[1])
                time.sleep(2)
                link2.send_keys(" " + infos[0])
                time.sleep(2)

                try:
                    link3 = self.bot.find_element_by_xpath('//*[@id="playerDropdown"]/li/a')
                    link3.click()

                    link4 = self.bot.find_element_by_xpath('//*[@id="playerProfileHero"]/div[1]/img')

                    src = link4.get_attribute('src')
                    req = Request(src, headers={'User-Agent': 'Mozilla/5.0'})
                    webpage = urlopen(req).read()
                    self.bot.get(src)

                    try:
                        element = self.bot.find_element_by_xpath('/html/body/img')
                        location = element.location
                        size = element.size
                        time.sleep(2)
                        bot.save_screenshot(nom+'.jpeg')
                    except: print('error photo')
                except: print('error joueur')

                # x=location['x']
                # y = location['y']
                # width = location['x']+size['width']
                # height = location['y']+size['height']
                # im = Image.open(nom+'.jpeg')
                # im = im.crop((int(x), int(y), int(width), int(height)))
                # im.save(nom+'.pnj')

                # actions = ActionChains(bot)
                # actions.key_down(Keys.CONTROL)
                # actions.send_keys('a')
                # actions.key_up(Keys.CONTROL)
                # actions.perform()
                # time.sleep(5)
                # actionss = ActionChains(bot)
                # actionss.key_down(Keys.CONTROL)
                # actionss.send_keys('s')
                # actionss.key_up(Keys.CONTROL)
                # actionss.perform()
                # time.sleep(5)
                # search = self.bot.find_element_by_xpath('/html/body/img')
                # ndaction = webdriver.ActionChains(bot)

                # ndaction.key_down(Keys.CONTROL).send_keys_to_element(search, 'S').key_up(Keys.CONTROL).perform()

                # webdriver.ActionChains(bot).key_down(Keys.CONTROL).send_keys("s").perform()
                # myaction = ActionChains(bot).key_down(Keys.CONTROL).send_keys("s").key_up(Keys.CONTROL)
                # myaction.perform()
                # action = ActionChains(bot)
                # saveas = action.key_down(Keys.CONTROL).send_keys("S")
                # saveas.perform()

                # .send_keys(nom+'.png').key_down(Keys.ALT).send_keys('S').key_up(Keys.ALT)          
                # saveas.perform()
                # time.sleep(2)  
                # action.key_down(Keys.CONTROL).send_keys('s').key_up(Keys.CONTROL).perform()
                # time.sleep(2)

                # action.send_keys(Keys.RETURN).perform()



                    # ActionChains(driver).key_down(Keys.CONTROL).send_keys('c').key_up(Keys.CONTROL).perform()
                # action.context_click(on_element = link5).action.send_keys(Keys.ARROW_DOWN).send_keys(Keys.ARROW_DOWN).send_keys(Keys.ARROW_DOWN).send_keys(Keys.RETURN).perform()
                # action.context_click(on_element = link5)
                # action.perform()
                # time.sleep(2)
                # action.send_keys(Keys.ARROW_DOWN)
                # action.perform()
                # time.sleep(2)
                # action.send_keys(Keys.ARROW_DOWN).perform()
                # action.perform()
                # time.sleep(2)
                # action.send_keys(Keys.ARROW_DOWN).perform()
                # action.perform()
                # time.sleep(2)

                # ActionChains(link5).send_keys(Keys.RETURN).perform()



                # secondaction = ActionChains(bot)
                # secondaction.send_keys(Keys.ARROW_DOWN)
                # secondaction.perform()
                # time.sleep(2)
                # secondaction.perform()
                # time.sleep(2)
                # secondaction.perform()
                # time.sleep(2)
                # thirdaction = ActionChains(bot)
                # thirdaction.send_keys(Keys.RETURN)
                # thirdaction.perform()
                # time.sleep(2)
      
                # time.sleep(2)


                # link5 = self.bot.find_element_by_xpath('/html/body/img')
                # ActionChains(link5).Context_click().Perform()
                # actionschains = ActionChains(self.bot)
                # img = self.bot.find_element_by_xpath('/html/body/img')
                # actionschains(self.bot).Context_click(img).Perform()


                

               


                # webpage.urlretrieve(src, nom +'.pnj')


mojo = GoogleBot()
mojo.getToATP()
