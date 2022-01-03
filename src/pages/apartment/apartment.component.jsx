import HomeNewImg from '../../assets/newbuildings.png';
import './apartment.styles.scss';
import ApartmentCard from './apartment-card/apartment-card.component';
import Header from '../../components/header/header.component';
import Build from '../../assets/build.png';
const Apartment = () => (
  <div className="apartment">
    <Header></Header>
    <div className="apartment-container container">
      <ApartmentCard
        raute="newbuild"
        title="Новостройка Parus"
        time="11 мая 10:00"
        address="Ташкент, улица Беруни, 3"
        classOf="Комфорт"
        numDom="1"
        floors="25"
        text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
        price="170.000.000"
        img={HomeNewImg}
      ></ApartmentCard>
      <ApartmentCard
        raute="newbuild"
        title="Новостройка Parus"
        time="11 мая 10:00"
        address="Ташкент, улица Беруни, 3"
        classOf="Комфорт"
        numDom="1"
        floors="25"
        text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
        price="170.000.000"
        img={HomeNewImg}
      ></ApartmentCard>
      <ApartmentCard
        raute="newbuild"
        title="Новостройка Parus"
        time="11 мая 10:00"
        address="Ташкент, улица Беруни, 3"
        classOf="Комфорт"
        numDom="1"
        floors="25"
        text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
        price="170.000.000"
        img={HomeNewImg}
      ></ApartmentCard>
      <ApartmentCard
        raute="build"
        title="Квартира 3-х комнатная"
        time="11 мая 10:00"
        address="Ташкент, улица Беруни, 3"
        classOf="Комфорт"
        numDom="1"
        floors="25"
        text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
        price="170.000.000"
        img={Build}
      ></ApartmentCard>
      <ApartmentCard
        raute="build"
        title="Квартира 3-х комнатная"
        time="11 мая 10:00"
        address="Ташкент, улица Беруни, 3"
        classOf="Комфорт"
        numDom="1"
        floors="25"
        text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
        price="170.000.000"
        img={Build}
      ></ApartmentCard>
      <ApartmentCard
        raute="build"
        title="Квартира 3-х комнатная"
        time="11 мая 10:00"
        address="Ташкент, улица Беруни, 3"
        classOf="Комфорт"
        numDom="1"
        floors="25"
        text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
        price="170.000.000"
        img={Build}
      ></ApartmentCard>
      <ApartmentCard
        raute="newbuild"
        title="Новостройка Parus"
        time="11 мая 10:00"
        address="Ташкент, улица Беруни, 3"
        classOf="Комфорт"
        numDom="1"
        floors="25"
        text="Сдаётся 2 ком квартира переделанные 3 ком
Лом находится 1.5 км от главный дороги
С евро ремонтом
Мебелью и техникой
"
        price="170.000.000"
        img={HomeNewImg}
      ></ApartmentCard>
    </div>
  </div>
);
export default Apartment;
