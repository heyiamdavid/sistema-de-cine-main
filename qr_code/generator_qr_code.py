import qrcode
from PIL import Image, ImageDraw

texto = "https://sistema-de-cine-main.vercel.app/"
qr = qrcode.QRCode(
    version=6,  
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=2
)
qr.add_data(texto)
qr.make(fit=True)
qr_img = qr.make_image(fill_color="gray", back_color="white").convert("RGB")
logo = Image.open("assets/Logo.png")
qr_width, qr_height = qr_img.size
logo_size = qr_width // 5
logo = logo.resize((logo_size, logo_size), Image.LANCZOS)
logo_width, logo_height = logo.size
pos = ((qr_width - logo_width) // 2, (qr_height - logo_height) // 2)
draw = ImageDraw.Draw(qr_img)
draw.rectangle(
    [pos, (pos[0] + logo_width, pos[1] + logo_height)],
    fill="white"
)
qr_img.paste(logo, pos, mask=logo if logo.mode == "RGBA" else None)
qr_img.save("assets/qr_logo_generado.png")


