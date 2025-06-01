from PIL import Image
import os

# 📂 Cambia esta ruta por la carpeta donde están tus .jpg
input_folder = './public/portfolio'
output_folder = './public/portfolio'

# Crear carpeta de salida si no existe
os.makedirs(output_folder, exist_ok=True)

# Recorrer todos los archivos .jpg
for filename in os.listdir(input_folder):
    if filename.lower().endswith('.jpg'):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path).convert('RGB')
        webp_name = os.path.splitext(filename)[0] + '.webp'
        output_path = os.path.join(output_folder, webp_name)

        img.save(output_path, 'webp', quality=85)
        print(f'✅ Convertido: {filename} → {webp_name}')
