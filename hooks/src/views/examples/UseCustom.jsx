import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'

const UseRef = (props) => {

    const [count, inc, dec] = useCounter()

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"/>

        <SectionTitle title="Exercícios #01" />
        <div className="center">
        <span className="text">{count}</span>
        <div>
            <button className="btn" onClick={() => inc()} >inc</button>
            <button className="btn" onClick={() => dec()} >dec</button>
        </div>
        </div>
        </div>
    )
}

export default UseRef
