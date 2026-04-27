import telebot
import yt_dlp
import os

TOKEN = '8678477615:AAG4BOzNLFJo1YNtJtmFS_c7wK67J_WWdm4'
bot = telebot.TeleBot(TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, "أهلاً بك.. أرسل لي أي رابط (فيديو أو صور) وسأقوم باستخلاصه لك فوراً.")

@bot.message_handler(func=lambda message: True)
def download_and_send(message):
    url = message.text
    chat_id = message.chat.id
    
    msg = bot.reply_to(message, "انتظر قليلاً.. جاري تحليل الرابط واستخراج المادة..")
    
    # إعدادات متقدمة للتعامل مع المواقع المختلفة وتجنب الحظر
    ydl_opts = {
        'format': 'best',
        'outtmpl': 'downloaded_media.%(ext)s',
        'quiet': True,
        'no_warnings': True,
        'nocheckcertificate': True,
        'user_agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            filename = ydl.prepare_filename(info)
        
        # إرسال الملف
        with open(filename, 'rb') as f:
            bot.send_document(chat_id, f)
            
        # تنظيف السيرفر
        os.remove(filename)
        bot.delete_message(chat_id, msg.message_id)
        
    except Exception as e:
        bot.edit_message_text(f"فشلت العملية.. قد يكون الرابط غير مدعوم أو الموقع محمي بشكل قوي.\nالخطأ: {str(e)}", chat_id, msg.message_id)

bot.polling(none_stop=True)
