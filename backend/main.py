from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from websocket.manager import ConnectionManager

app = FastAPI()

manager = ConnectionManager()

@app.get("/")
def home():
    return {"message": "Backend running"}

@app.websocket("/ws/{workflow_id}")
async def websocket_endpoint(websocket: WebSocket, workflow_id: str):
    await manager.connect(websocket, workflow_id)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        await manager.disconnect(workflow_id)