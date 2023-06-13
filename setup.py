from cx_Freeze import  Executable
# import requests
# from bs4 import BeautifulSoup

# import pyperclip
# import pyautogui
import sys
from setuptools import setup, find_packages

base = None

#Remplacer "monprogramme.py" par le nom du script qui lance votre programme
executables = [Executable("mail_template/mail.py", base=base)]
#Renseignez ici la liste complète des packages utilisés par votre application
packages = []

includes = [
	"ssl",
    "smtplib"
]

options = {
    'build_exe': {    
        # 'packages':packages,
         "includes" : includes
    },
   
    # "zip_include_packages": packages
}
#Adaptez les valeurs des variables "name", "version", "description" à votre programme.
setup(
    name = "Mail",
    options = options,
    version = "1.0",
    # scripts=['mail_template/mail.py'],
    description = 'Voici mon programme',
    # package_dir={'mail': 'mail'},
    packages=find_packages(),
    executables = executables,
    install_requires=packages,
    include_package_data=True,
    # ext_package='pyautogui',
    # extras_require={
    #     '': ['smtplib', "ssl"],
    #     },
    # setup_requires=['smtplib', 'ssl']
)
