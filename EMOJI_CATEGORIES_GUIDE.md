# 📱 Category Icons - Emoji Guide

## Available Category Icons for New Categories

### 💰 Income Categories (8 Emojis)
When creating income categories, choose from:

| Emoji | Category Name | Best For |
|-------|--------------|----------|
| 💼 | Salary | Regular employment/job |
| 🖥️ | Freelance | Freelance/contract work |
| 🏢 | Business | Business revenue |
| 📈 | Investment | Investment returns |
| 🎁 | Bonus | Bonuses & rewards |
| 💎 | Premium | Premium income |
| 🏆 | Achievement | Achievement-based income |
| 🌟 | Referral | Referral bonuses |

**Usage Example:**
When adding a new income category, you can type "Salary" and the emoji 💼 will be assigned automatically.

---

### 🛒 Expense Categories (40+ Emojis)

#### Food & Dining (5)
| Emoji | Category |
|-------|----------|
| 🛒 | Groceries |
| 🍕 | Dining |
| ☕ | Coffee |
| 🍔 | Fast Food |
| 🍽️ | Restaurants |

#### Transportation (4)
| Emoji | Category |
|-------|----------|
| 🚗 | Car/Fuel |
| 🚕 | Taxi/Uber |
| ✈️ | Travel |
| 🚌 | Public Transit |

#### Lifestyle & Shopping (12)
| Emoji | Category |
|-------|----------|
| 🛍️ | Shopping |
| 👕 | Clothing |
| 👟 | Shoes |
| 💄 | Beauty |
| 💅 | Makeup |
| 👜 | Accessories |
| 🕶️ | Sunglasses |
| 👓 | Glasses |
| ⌚ | Watches |
| 💍 | Jewelry |
| 🎩 | Hats |
| 👔 | Fashion |

#### Entertainment (8)
| Emoji | Category |
|-------|----------|
| 🎮 | Gaming |
| 🎬 | Movies |
| 🎵 | Music |
| 🎪 | Entertainment |
| 🎭 | Theater |
| 🎨 | Art |
| 🎯 | Hobbies |
| 🎲 | Games |

#### Fitness & Health (8)
| Emoji | Category |
|-------|----------|
| 💪 | Fitness |
| 🏋️ | Gym |
| 🏥 | Healthcare |
| ❤️ | Health |
| 💊 | Medicine |
| 🧘 | Wellness |
| 🤸 | Sports |
| ⚽ | Sports Equipment |

#### Utilities & Services (10)
| Emoji | Category |
|-------|----------|
| 💡 | Utilities |
| 📱 | Phone |
| 📡 | Internet |
| 📺 | Subscription |
| 🛡️ | Insurance |
| 📞 | Telecom |
| �� | Electricity |
| 💧 | Water |
| 🌡️ | Heating |
| 🧹 | Cleaning |

#### Home & Garden (5)
| Emoji | Category |
|-------|----------|
| 🏠 | Rent/Home |
| 🔧 | Maintenance |
| 🛠️ | Repairs |
| 🌿 | Gardening |
| 🪴 | Plants |

#### Education & Books (3)
| Emoji | Category |
|-------|----------|
| 📚 | Education |
| 📖 | Books |
| ✏️ | School Supplies |

#### Pets & Animals (2)
| Emoji | Category |
|-------|----------|
| 🐾 | Pet Care |
| 🦴 | Pet Food |

#### Special Occasions (4)
| Emoji | Category |
|-------|----------|
| 🎁 | Gifts |
| 🎉 | Party |
| 🎂 | Birthday |
| 💐 | Flowers |

#### Other (5)
| Emoji | Category |
|-------|----------|
| 📷 | Photography |
| 🚬 | Bad Habits |
| 🧸 | Toys |
| 📦 | Packages |
| ❓ | Miscellaneous |

---

### 📅 Planning & Reminder Types (8 Emojis)

| Emoji | Type | Usage |
|-------|------|-------|
| 📄 | Bill | Monthly bills, invoices |
| ⏰ | Reminder | Important reminders |
| 👤 | Personal | Personal tasks |
| 💼 | Work | Work-related tasks |
| 🎯 | Goal | Financial goals |
| 📌 | Important | Important dates |
| ✓ | Completed | Completed items |
| 📅 | Event | Calendar events |

---

## 🎨 UI Element Icons (15 Emojis)

| Emoji | Element | Used For |
|-------|---------|----------|
| 💰 | Wallet | Main app icon |
| ➕ | Plus | Add new item |
| 🗑️ | Delete | Remove item |
| ✏️ | Edit | Modify item |
| ⬇️ | Download | Export/Backup |
| 📊 | Dashboard | Main dashboard |
| 📈 | Trending Up | Income/Increase |
| 📉 | Trending Down | Expense/Decrease |
| 📅 | Calendar | Dates |
| ⚙️ | Settings | Settings menu |
| 🔔 | Bell | Notifications |
| 🌍 | Globe | Language |
| 👋 | Wave | Logout |
| ⚠️ | Alert | Warnings |
| ✅ | Check | Completed |

---

## 💡 Tips for Best Results

### When Creating Categories:
1. **Match the exact name** from the list above
2. The emoji will **automatically assign** when you select it
3. You can **customize colors** independently of icons
4. Each category can have a **unique color gradient**

### Examples:
```
✅ GOOD: Category "Groceries" → Automatically gets 🛒
✅ GOOD: Category "Fitness" → Automatically gets 💪
❌ BAD: Category "Grocery" → Won't match "Groceries"
```

### Creating Custom Categories:
While the system provides pre-defined icons, you can:
- Use any emoji from the list
- Combine emojis for unique looks: 🍕‍💼 (work lunch)
- Use the generic categories if exact match not found

---

## 🚀 Adding More Icons

To add new category icons:

1. Edit the `EmojiMap` in `src/App.tsx`
2. Add your new entry: `'NewCategory': '🆕'`
3. Save and restart the app
4. Select the category when creating a new transaction

Example:
```typescript
EmojiMap: {
  // ... existing categories
  'Gaming': '🎮',
  'Video': '📹',  // NEW!
  'Streaming': '📺'
}
```

---

**Total Icons Available**: 50+ Emojis
**Categories Covered**: Income, Expenses, Planning, UI Elements
**Customization**: Colors fully customizable per category

Enjoy creating your personalized financial tracking system! 🎉
