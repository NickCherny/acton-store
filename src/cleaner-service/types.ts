import {APIGatewayProxyEvent, APIGatewayProxyResult} from 'aws-lambda';

export type HttpEventRequest<T = null> = Omit<APIGatewayProxyEvent, 'pathParameters'> & {
  pathParameters: T
}

export type HttpResponse = Promise<APIGatewayProxyResult>;

export type Cleaner = {
  id: string
  name: string
  cost: string
  date: string
  description: string
  services: string
  gender: string
}
