import classNames from 'classnames';
import React, { useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss'

const Image = ({ src, fallBack: customFallBack = images.noImage, className, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('')

    const handleError = () => {
        setFallBack(customFallBack)
    }

    return (
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallBack || src} {...props} onError={handleError} />
    )
}

export default React.forwardRef(Image)