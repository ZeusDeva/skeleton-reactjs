import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles1/Home.module.css";
import { Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Table from "src/components/Table";

export default function Home() {

  const columns = [
		{
			title: "Column 1",
			dataIndex: "column_1",
			key: 1,
		},
		{
			title: "Column 2",
			dataIndex: "column_2",
			key: 2,
		},
		{
			title: "Column 3",
			dataIndex: "column_3",
			key: 3,
		},
		{
			title: "Column 4",
			dataIndex: "column_4",
			key: 4,
		},
		{
			title: "Column 5",
			dataIndex: "column_5",
			key: 5,
		},
		{
			title: "Column 6",
			dataIndex: "column_6",
			key: 6,
		},
	];

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
          Table Example
        </p>

        <div className={styles.grid}>
				<Col md={30} xs={30} style={{marginRight: '20px'}}>
					<Form.Item
						label="Table"
						name="table_example_1"
					>
          <Table
							scroll={{ x: 600 }}
							columns={columns}
					/>
          </Form.Item>
				</Col>
				{/* <Col md={30} xs={30} style={{marginRight: '20px'}}>
					<Form.Item
						label="Contoh Date Picker 2"
						name="date_example_2"
					>
					<DatePicker
                  //   disabled={!closeApp}
                  placeholder="Sample Date Picker"
                  //   disabledDate={disabledStartDate}
                  //   onChange={onStartChange}
                  //   value={startValue}
                  showToday={false}
                  format={'DD-MM-YYYY'}
                />	
					</Form.Item>
				</Col> */}
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