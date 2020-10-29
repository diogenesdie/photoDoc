from PIL import Image
from io import BytesIO
import base64

def decode_base64_img(img, url):
    image = Image.open(BytesIO(base64.b64decode(img.split(',')[1])))

    image.save(url)

