from transformers import MT5Model, MT5Tokenizer
import os

# Define save path
save_path = "./pretrained_weight/mt5-base"
os.makedirs(save_path, exist_ok=True)

# Download model and tokenizer
model = MT5Model.from_pretrained("google/mt5-base")
tokenizer = MT5Tokenizer.from_pretrained("google/mt5-base")

# Save to specified directory
model.save_pretrained(save_path)
tokenizer.save_pretrained(save_path)
