import { notification } from 'antd';

export const errorHandler = ( error = 'Something went wrong' ) => {
    notification.error({
        message: error,
        description: 'Please, try again later.'
      });
}