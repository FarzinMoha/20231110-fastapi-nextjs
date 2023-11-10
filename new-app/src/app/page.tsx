'use client'

import styles from './page.module.css'
import axios from 'axios'
import {useState} from "react";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true
})

export default function Home() {
  const [session, setSession] = useState('empty')

  async function cookie() {
    await axiosInstance.get('/cookie')
    setSession(document.cookie)
  }

  async function cookieTest() {
    await axiosInstance.get('/cookie-test')
    setSession(document.cookie)
  }

  return (
    <main className={styles.main}>
      <button onClick={cookie}>get cookie</button>
      <button onClick={cookieTest}>test cookie</button>
      <p>{session}</p>
    </main>
  )
}