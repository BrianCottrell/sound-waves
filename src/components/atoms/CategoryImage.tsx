import React, { PureComponent } from 'react'
import cx from 'classnames'
import styles from './CategoryImage.module.scss'

import alexa from '../../img/categories/alexa.png'
import google from '../../img/categories/google.png'
import siri from '../../img/categories/siri.png'
import fallback from '@oceanprotocol/art/jellyfish/jellyfish-back.svg'

const categoryImageFile = (category: string) => {
    switch (category) {
        // technically no category
        // but corresponding to title of a channel
        case 'Google':
            return google
        case 'Siri':
            return siri
        case 'Alexa':
            return alexa
        default:
            return fallback
    }
}

export default class CategoryImage extends PureComponent<{
    category: string
    header?: boolean
    dimmed?: boolean
}> {
    public render() {
        const image = categoryImageFile(this.props.category)
        const classNames = cx(styles.categoryImage, {
            [styles.header]: this.props.header,
            [styles.dimmed]: this.props.dimmed
        })

        return (
            <div
                className={classNames}
                style={{ backgroundImage: `url(${image})` }}
            />
        )
    }
}
