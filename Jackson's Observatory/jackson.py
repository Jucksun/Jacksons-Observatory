import datetime
import numpy as np

x=datetime.datetime.now()
m = datetime.datetime.now().month
d = datetime.datetime.now().day
y = datetime.datetime.now().year
h= datetime.datetime.now().hour
minute= datetime.datetime.now().minute
second= datetime.datetime.now().second

month = ""
day = ""
year = ""

def jackson(rmonth, rday, ryear):
    date = [m, d, y, h, minute, second]
    jacksondate = [2, 20, 2008, 6, 40, 22]
    age = (np.array(date) - np.array(jacksondate)).tolist()
    results = f"Jackson is {age[2]} years, {age[0]} months, {age[1]} days, and {age[3]} hours, {age[4]} minutes, {age[5]} seconds old."

    return results


print(jackson(month, day, year))