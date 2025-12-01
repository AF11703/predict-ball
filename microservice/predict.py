from pandas import DataFrame
from pickle import load
from pathlib import Path
from fastapi import FastAPI
from pydantic import BaseModel

model_path = Path().cwd() / "ml-model/model.pkl"

with open(model_path, "rb") as f:
  model = load(f)

class Game(BaseModel):
  #Home
  FG_PCT_home: float
  FT_PCT_home: float
  FG3_PCT_home: float
  AST_home: int
  REB_home: int
  #Away
  FG_PCT_away: float
  FT_PCT_away: float
  FG3_PCT_away: float
  AST_away: int
  REB_away: int

app = FastAPI()

@app.post("/api/predict")
def predict(game: Game):
  try:
    input_data = game.model_dump()
    
    prediction = model.predict(DataFrame([input_data]))
    print(f"Raw prediction: {prediction}")
    print(f"Prediction value: {prediction[0]}")
    return {"home_win": int(prediction[0])} #1 if win, 0 if loss
  except Exception as e:
    print(f"Error: {e}")
    return {"result": f"Error: {e}"}