import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles1/Home.module.css";
import { Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function Home() {

const categorySelector = useSelector((state) => state.categorySelector);
console.log('isinya apa ini??', categorySelector)
console.log(typeof categorySelector) //typeOf = object
const [categoryOptions, setCategoryOptions] = useState([]);

useEffect(() => {
	if(categorySelector && Array.isArray(categorySelector.category)){
		categorySelector.category.forEach((item, index) => {
			console.log(`Item ${index}`, item)
		})
	
		const options = categorySelector.category.map((category) => ({
			value: category
		}));
	
		console.log('Category Options = ', options)
		setCategoryOptions(options)
	} else {
		console.error('Category Error')
	}
}, [categorySelector])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>
          Welcome to The <a href="https://nextjs.org">Jungle!</a>
        </h1> */}

        <p className={styles.description}>
        	Drop Down Example
        </p>

        <div className={styles.grid}>
				<Col md={30} xs={30} style={{marginRight: '20px'}}>
					<Form.Item
						label="Drop Down 1"
						name="drop_down_example_1"
					>
						<Select
						options={categoryOptions}
						/>
					</Form.Item>
				</Col>
				<Col md={30} xs={30} style={{marginRight: '20px'}}>
					<Form.Item
						label="Drop Down 2"
						name="drop_down_example_2"
					>
						<Select/>
					</Form.Item>
				</Col>
				<Col md={30} xs={30} style={{marginRight: '20px'}}>
					<Form.Item
						label="Drop Down 3"
						name="drop_down_example_3"
					>
						<Select
						disabled
						/>
					</Form.Item>
				</Col>
				<Col md={30} xs={30} style={{marginRight: '20px'}}>
					<Form.Item
						label="Drop Down 4"
						name="drop_down_example_4"
					>
					<Select
					disabled
					/>
					</Form.Item>
				</Col>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}
