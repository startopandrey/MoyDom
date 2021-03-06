import React from 'react';
import './blog-article.styles.scss'
import BlogArticleImg from '../../assets/blog-article.png'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Button } from '@mui/material';
import { Facebook, Telegram } from '@mui/icons-material';
const BlogArticle = () => (
  <div className="blog-acticle">
    <h3 className="blog-acticle-title">
      Продажа, завещание, дарение или пожизненное содержание: какой способ
      передачи прав собственности на квартиру лучше?
    </h3>
    <div className="blog-acticle-time">
      <AccessTimeIcon className="blog-acticle-time-icon"></AccessTimeIcon>
      <span>21 мая 2021</span>
    </div>
    <div
      className="blog-acticle-img"
      style={{ background: `url("${BlogArticleImg}") no-repeat` }}
    ></div>
    <p className="blog-text">
      Наиболее удобным способом передачи квартиры в собственность является
      договор дарения. Но многое зависит от конкретной ситуации, степени родства
      и взаимоотношений между родными. Порой бывают такие случаи, что удобнее
      передать недвижимость на основании завещания и реже на основании договора
      о купли-продажи.
    </p>
    <p className="blog-text">
      Решающим фактором при выборе способа передачи жилья от одного собственника
      к другому являются расходы на эти процедуры.
    </p>
    <p className="blog-text">Что же выбрать?</p>
    <p className="blog-text">
      Среди родственников передача недвижимости по договору купли-продажи
      встречается достаточно редко. При этом такая форма не имеет никаких
      преимуществ для родственников, кем бы они не приходились по степени
      родства. Единственный плюс купли-продажи – это сроки оформления – можно
      уложиться за месяц. Купля-продажа идеально подойдет, для супругов в
      гражданском браке. В остальных случаях, такую процедуру можно даже не
      рассматривать.
    </p>
    <p className="blog-text">
      Чаще всего родственники передают недвижимость в собственность при помощи
      завещания или договора дарения. Оба случая не подразумевают передачи
      денежных средств, а значит куплей-продажей не считаются. Но в чем разница
      между этими понятиями?
    </p>
    <p className="blog-text">
      Дарение или завещание – это передача недвижимости от одного собственника
      другому на безвозмездной основе. Различаются эти процедуры по срокам
      вступления будущего собственника в свои права. По завещанию это происходит
      после кончины первого владельца, при дарении сразу после регистрации
      госреестре. Завещание в обязательном порядке оформляют у нотариуса, тогда
      как при дарении это делать необязательно. В остальном – дарить или
      завещать будет завесить от взаимоотношений и обстоятельств внутри семьи.
    </p>
    <p className="blog-text">
      • Дарение обладает рядом весомых преимуществ даже перед завещанием:
      <br></br> • По налогообложению и стоимости оформления сделки;<br></br> •
      Юридически неоспоримый документ;<br></br> • Одариваемый может сразу
      заселиться или продать недвижимость.
    </p>
    <p className="blog-text">Договор ренты или пожизненное содержание</p>
    <p className="blog-text">
      Достаточно популярная процедура в том случае, когда один человек ухаживает
      и полностью содержит одинокого старика вплоть до его кончины взамен на
      недвижимость.
    </p>
    <p className="blog-text">
      Допустим пожилая женщина не в состоянии себя обеспечивать, она одинока, но
      у нее есть квартира. В силу своего возраста она не может и не хочет
      сдавать имеющееся жилье. В таком случае она вправе передать свое имущество
      в собственность другого человека, который вступит в полноправное владение
      лишь после смерти хозяйки. Оплата за ренту производится исключительно
      деньгами, но не услугой или вещами. Т.е. плательщик берет на себя
      обязательства по ее пожизненному содержанию и при этом проживать в
      квартире, выплачивая как будто рассрочку.
    </p>
    <p className="blog-text">
      Также ренту оформляют с иждивением, т.е. плательщик не только выплачивает
      ежемесячную сумму, но и обязуется приобретать для старика лекарства,
      обувь, одежду, продукты, обеспечивать медицинский уход и помогать в
      бытовых вопросах.
    </p>
    <p className="blog-text">
      Такая форма передачи имеет как плюсы, так и минусы, например, срок долга –
      он не определен и завершится только после кончины собственника имущества.
      Кроме этого плательщик берет все расходы по оформлению у нотариуса
      необходимых документов. Владелец квартиры может стать жертвой мошенников,
      нередки случаи, когда рантье старались «помочь» старику отправиться на тот
      свет, чтобы сократить расходы и быстрее завладеть имуществом.
    </p>
    <div className="blog-acticle-share">
      <h3 className="blog-acticle-share-title">Поделиться:</h3>
      <Button
        className="blog-acticle-share-button teleg"
        variant="contained"
        startIcon={<Telegram></Telegram>}
      >
        Telegram
      </Button>
      <Button
        variant="contained"
        className="blog-acticle-share-button"
        startIcon={<Facebook></Facebook>}
      >
        Facebook
      </Button>
    </div>
  </div>
);
export default BlogArticle