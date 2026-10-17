from PIL import Image
import os

im = Image.open('Meal ji.png')
w, h = im.size
os.makedirs('public/images', exist_ok=True)

def save_img(img, path):
    if path.endswith('.jpg') or path.endswith('.jpeg'):
        img.convert('RGB').save(path, quality=95)
    else:
        img.save(path)

# 1. Logo from navbar (around center)
logo_crop = im.crop((880, 20, 1040, 75))
save_img(logo_crop, 'public/images/logo.png')

# 2. Section 4 Mascot (cartoon chef)
mascot_1 = im.crop((1460, 3250, 1850, 3600))
save_img(mascot_1, 'public/images/mascot-chef-1.png')

# 3. Section 5 Mascot (chef with mustache holding spoon/wink on orange bg)
mascot_2 = im.crop((200, 4400, 600, 4750))
save_img(mascot_2, 'public/images/mascot-chef-2.png')

# 4. Mobile App Mockup
app_mockup = im.crop((1100, 3680, 1580, 4620))
save_img(app_mockup, 'public/images/app-mockup.png')

# 5. Specials
dish_pizza = im.crop((270, 5060, 530, 5320))
save_img(dish_pizza, 'public/images/special-pizza.jpg')

dish_burger = im.crop((650, 5060, 910, 5320))
save_img(dish_burger, 'public/images/special-burger.jpg')

dish_lemonade = im.crop((1020, 5060, 1280, 5320))
save_img(dish_lemonade, 'public/images/special-lemonade.jpg')

dish_chicken = im.crop((1390, 5060, 1650, 5320))
save_img(dish_chicken, 'public/images/special-chicken.jpg')

# 6. Reservation Table image
res_table = im.crop((0, 5760, 920, 6550))
save_img(res_table, 'public/images/reservation-table.jpg')

# 7. Testimonial photo cluster
testi_photo = im.crop((700, 6960, 1220, 7350))
save_img(testi_photo, 'public/images/testimonial-photos.jpg')

# 8. Feature icons
feat_1 = im.crop((340, 7690, 500, 7850))
save_img(feat_1, 'public/images/feat-quality.png')

feat_2 = im.crop((700, 7780, 860, 7940))
save_img(feat_2, 'public/images/feat-delivery.png')

feat_3 = im.crop((1060, 7690, 1220, 7850))
save_img(feat_3, 'public/images/feat-taste.png')

feat_4 = im.crop((1420, 7780, 1580, 7940))
save_img(feat_4, 'public/images/feat-traditional.png')

# 9. Blog images
blog_1 = im.crop((230, 8310, 680, 8660))
save_img(blog_1, 'public/images/blog-1.jpg')

blog_2 = im.crop((735, 8310, 1185, 8660))
save_img(blog_2, 'public/images/blog-2.jpg')

blog_3 = im.crop((1240, 8310, 1690, 8660))
save_img(blog_3, 'public/images/blog-3.jpg')

print("All assets extracted successfully!")
