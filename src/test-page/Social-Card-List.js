import React from 'react';
import SocialCard from './Social-Card';

const SocialCardList = () => {
    const dataList = [
        { fullName: 'The Practical dev', email: '@pracdev', createdDate: new Date(2018, 12, 6), likes: 45, share: 5825, mes: 'Learning React? Start small' },
        { fullName: 'The Mayer', email: '@mayer', createdDate: new Date(2019, 4, 1), likes: 32, share: 52, mes: 'Learning React? Start small' },
        { fullName: 'The Juggernaut', email: '@span', createdDate: new Date(2019, 9, 6), likes: 34, share: 5, mes: 'Learning React? Start small' },
        { fullName: 'The Predator', email: '@jugger', createdDate: new Date(2019, 11, 3), likes: 4545, share: 45, mes: 'Learning React? Start small' },
    ];

    return (
        <div>
            <ul>
                {
                    dataList.map(
                        data => (<li><SocialCard data={data} /></li>)
                    )
                }
            </ul>
        </div>
    );
}

export default SocialCardList;