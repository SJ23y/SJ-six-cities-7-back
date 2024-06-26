
export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  CityService: Symbol.for('CityService'),
  CityModel: Symbol.for('CityModel'),
  CityController: Symbol.for('CityController'),
  OfferService: Symbol.for('OfferService'),
  OfferModel: Symbol.for('OfferModel'),
  CommentService: Symbol.for('CommentService'),
  CommentModel: Symbol.for('CommentModel'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
  UserController: Symbol.for('UserControler'),
  OfferController: Symbol.for('OfferController'),
  CommentController: Symbol.for('CommentController'),
  AuthService: Symbol.for('AuthService'),
  AuthExceptionFilter: Symbol.for('AuthExceptionFilter'),
  ValidationExceptionFilter: Symbol.for('ValidationExceptionFilter'),
  HttpExceptionFilter: Symbol.for('HttpExceptionFilter'),
  PathTransformer: Symbol.for('PathTransformer')
} as const;
