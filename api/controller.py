import services

def validationController(body):
  if not('text' in body):
    return { 'status': 'bad request' }

  return services.predictModel(body['text'])