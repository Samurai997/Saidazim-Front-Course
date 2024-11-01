import speech_recognition as sr
from gtts import gTTS
import os, pyttsx3

def speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()

def listen():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        print("Gapiring...")
        audio = r.listen(source)
        try:
            text = r.recognize_google(audio, language="uz-UZ")
            print(f"Siz aytdingiz: {text}")
            return text.lower()
        except sr.UnknownValueError:
            print("Kechirasiz, ovozingizni tanib bo'lmadi.")
            return ""
        except sr.RequestError:
            print("Xatolik yuz berdi!")
            return ""

def chatbot_response(user_input):
    if 'qalay' in user_input or 'qandaysan' in user_input:
        return "Yaxshi, siz qalaysiz?"
    elif 'isming nima' in user_input:
        return "Men Simcoderning botiman"
    elif 'rahmat' in user_input:
        return "Arzimaydi!"
    elif 'andijondan' in user_input:
        return 'Andijon va Qoraqalpogʻiston o‘rtasidagi masofa taxminan 900-950 kilometrni tashkil qiladi.'
    elif 'xayr' in user_input or 'exit' in user_input:
        return "Xayr, keyingi safar ko'rishguncha!"
    else:
        return "Afsus, bu savolga javobim yo'q."

if name == "main":
    speak("Salom! Men bilan gaplashishingiz mumkin.")
    while True:
        user_input = listen()
        if user_input:
            response = chatbot_response(user_input)
            speak(response)
        if 'xayr' in user_input or 'exit' in user_input:
            break