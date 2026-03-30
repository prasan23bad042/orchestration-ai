from datetime import datetime

class EventEmitter:
    def __init__(self, manager):
        self.manager = manager

    async def emit(self, workflow_id: str, event_type: str, payload: dict):
        message = {
            "type": event_type,
            "time": datetime.utcnow().isoformat(),
            "data": payload
        }
        await self.manager.send(workflow_id, message)