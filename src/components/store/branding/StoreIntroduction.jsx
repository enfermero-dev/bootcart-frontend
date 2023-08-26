import React from 'react'
import { useTranslation } from 'react-i18next';

export const StoreIntroduction = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div>
                <div className='mx-4 max-w-xl'>
                    <h3 className='text-lg'>{t('store-introduction-title')}</h3>
                    <div className='flex flex-row py-4 items-center'>
                        <div className='aspect-square w-auto h-16 bg-purple-500 '></div>
                        <p className='pl-4 text-xs'>{t('store-introduction-description')} Welcome to the Store, where we have the finest selection of products that cater to your every need. Whether you're searching for cutting-edge electronics, fashionable clothing, exquisite home decor, or essential everyday items, we've curated a diverse range to fulfill your desires.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
