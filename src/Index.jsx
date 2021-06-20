import React from 'react'

import Cards from './Cards/Cards'
import Heading from './main/Heading'
import Footer from './footer/Footer'

export default function () {
    return (
        <div>
            <Heading></Heading>
            <div className='container-cards'>
                <Cards title='LinkedIn' text='Tudo sobre minha vida profissional e minha carreira.' link='https://www.linkedin.com/in/jonatas-dos-santos-b94b54212/'></Cards>
                <Cards title='Github' text='Navegue pelos meus codigos e projetos finalisados. ' link=''></Cards>
                <Cards title='Instagram' text='Acompanhe meu dia a dia.' link='https://www.instagram.com/jhonbary_/'></Cards>
                <Cards title='Facebook' text='Outra rede social.' link='https://www.facebook.com/jonatasfloripa/'></Cards>
            </div>
            <Footer />
        </div>
    )
}