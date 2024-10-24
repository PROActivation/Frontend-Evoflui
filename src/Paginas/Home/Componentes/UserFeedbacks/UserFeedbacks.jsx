import './UserFeedbacks.css'
import React from 'react';
import Person1 from '../../../../assets/imagens/personFeedback1.svg';
import Person2 from '../../../../assets/imagens/personFeedback2.svg'
import Person3 from '../../../../assets/imagens/personFeedback3.svg'
import Person4 from '../../../../assets/imagens/personFeedback4.svg'
import Person5 from '../../../../assets/imagens/personFeedback5.svg'

import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
register();


function UserFeedbacks() {
    const data = [
        {
            id: '1',
            imagem: Person1,
            descricao: 'Imagem de uma mulher negra com coroa de flores',
            nome: 'Alissa Varela',
            depoimento: 'A trilha de conscientização para tutores é excelente. Os recursos fornecidos ajudam a entender as necessidades dessas pessoas. A abordagem da plataforma é prática e acessível, e os eventos sociais são um bônus valioso para todos.'
        },
        {
            id: '2',
            imagem: Person2,
            descricao: 'Imagem de uma mulher negra com um chapéu de praia branco',
            nome: 'Marina Fiori',
            depoimento: 'O evento sobre TEA que participei foi muito informativo e organizado. A possibilidade de interagir com outros pais e especialistas foi enriquecedora. A plataforma é uma excelente ferramenta para quem busca apoio e recursos.'
        },
        {
            id: '3',
            imagem: Person3,
            descricao: 'Imagem de uma homem branco usando óculos',
            nome: 'Dante Ferraz',
            depoimento: 'A plataforma foi essencial para o desenvolvimento social do meu filho. As trilhas de aprendizado são incríveis e realmente fazem a diferença no dia a dia. O fórum é uma ótima opção para aqueles que querem trocar experiências e conhecimento.'
        },
        {
            id: '4',
            imagem: Person4,
            descricao: 'Imagem de uma homem branco usando óculos',
            nome: 'Lucas Andrade',
            depoimento: 'Os conteúdos oferecidos pela plataforma são enriquecedores. As trilhas são bem planejadas e os eventos proporcionam uma ótima chance de conexão com outros pais e especialistas. É um espaço seguro e acolhedor para aprender.'
        },
        {
            id: '5',
            imagem: Person5,
            descricao: 'Imagem de uma mulher negra utilizando uma regata branca',
            nome: 'Isabela Duarte',
            depoimento: 'A jornada de aprendizado da plataforma superou minhas expectativas. As ferramentas são fáceis de usar e ajudaram minha filha a se desenvolver. A comunidade de tutores é acolhedora, sempre compartilhando experiências.'
        }
    ]
    return (
        <div>
            <h1 className='section-title'>Nossas últimas avaliações</h1>
            <main className="user-feebacks-section">
                <Swiper
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-navigation-color": "#FFF",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "16px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='user-container'>
                                <img src={item.imagem} alt={item.descricao} />
                                <h1 className='user-name'>{item.nome}</h1>
                                <p className='user-text'>{item.depoimento}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </div>
    )
}

export default UserFeedbacks;