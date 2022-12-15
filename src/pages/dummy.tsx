import styles from '../styles/Home.module.scss'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'
import MainVisual from '../components/MainVisual'
import SampleButton from '../components/SampleButton'
import { GetServerSidePropsContext, GetServerSideProps } from 'next'

type Props = {
  articles: Article[]
}

export default function Home(props: Props) {
  return (
    <div className={styles.container}>
      <TheHeader></TheHeader>

      <main className={styles.main}>
        <MainVisual></MainVisual>
        <div className={styles.contents}>
          <h1 className={styles.title}>
            Dummy page
          </h1>
          <div className={styles.paragraph}>
          Mauris maximus euismod leo, sit amet facilisis urna dignissim id. Cras faucibus velit magna, et tempor neque lobortis non. Sed viverra dolor et mauris rutrum euismod. Donec laoreet mauris eget nulla porttitor luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam fermentum congue arcu, sagittis vehicula sapien tincidunt quis. Vivamus feugiat et lectus ac ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent posuere dignissim dolor, non accumsan orci auctor ac. Aenean rutrum sollicitudin dapibus. Curabitur vestibulum erat ac urna interdum, quis aliquet ex condimentum. Morbi ornare nibh eu mauris mollis, eget fringilla magna lacinia. Nam nisi ex, mattis eu purus eget, auctor facilisis odio. Nunc dignissim quam purus, et tempus dolor laoreet quis.
          </div>
          <div className={styles.articles}>
            {props.articles.map(_=><div><div className={styles.title}>{_.title}</div><div className={styles.body}>{_.content}</div></div>)}
          </div>
          <SampleButton></SampleButton>
        </div>
      </main>
      <TheFooter></TheFooter>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const host = 'localhost:3000'
    const protocol = /^localhost/.test(host) ? 'http' : 'https'
    const articles = await fetch(`${protocol}://${host}/api/articles`)
      .then(data => data.json())
    console.log('articles',articles)
    return {
      props: {
        articles,
      }
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        articles: [],
      }
    }
  }
}