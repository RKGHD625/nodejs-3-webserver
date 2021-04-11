from tkinter import *
from tkinter import messagebox

tk = Tk()

def fun():
    msg = messagebox.showinfo("Message","Welcome to tkinter")
tk.title("Button action")
B = Button(tk,text="OK",command=fun)
B.place(x=500,y=500)

tk.mainloop()