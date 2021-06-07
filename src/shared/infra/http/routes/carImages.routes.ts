import { Router } from 'express'
import multer from 'multer'

import authenticationHandler from '../middlewares/AuthenticationHandler'
import authorizationHandler from '../middlewares/AuthorizationHandler'
import uploadCarImageController from '@cars/controllers/carImageControllers/UploadCarImageController'
import uploadConfig from '@config/UploadConfig'



const carImagesRoutes = Router()
const upload = multer(uploadConfig.options('cars_image'))

carImagesRoutes.route('/:car_id')
  .post(
    upload.array('images'),
    authenticationHandler.exec,
    authorizationHandler.exec,
    uploadCarImageController.handle
  )

export default carImagesRoutes