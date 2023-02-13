import React, { useState,useNavigate } from "react";
import { Table, Form, Container, Modal, Col, Row, Button } from "react-bootstrap";
import "../../css/pusatBantuan.css";
import SideNav from "../SideNav";
import BantuanSelesai from "../../components/pusatBantuan/BantuanSelesai";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function ModalPenyelesaian(props) {

	function KonfBantuan(){
		// let navigate = useNavigate();
		// // alert("ok");
		// navigate("/");
		
	}

	return (
		<Modal
			show={props.showKonfirmasiPenyelesaian}
			onHide={props.closePenyelesaian}
			contentClassName="modalContent-konfirmasi"
			backdropClassName="modalBackdrop-konfirmasi "
		>
			<Modal.Body>
				<div className="body-modal-konfirmasi ">
					<div className="box-form-modal-konfirmasi mx-auto mt-3">
						<span className="modal-label-title ">Konfirmasi Penyelesaian Bantuan</span>
						<div className="form-konfirmasi mt-3">
							<Row>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Nomor Tiket</Form.Label>
										<Form.Control placeholder="001-BUYER" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Pemohon Bantuan</Form.Label>
										<Form.Control placeholder="Anton Wijaya" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Tanggal Permintaan</Form.Label>
										<Form.Control placeholder="001-BUYER" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Nomor Transaksi</Form.Label>
										<Form.Control
											placeholder="INV/20202020/XX/XV/554364534"
											readOnly
											className="form-konfirmas-placeholder"
										/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Kategori Akun</Form.Label>
										<Form.Control placeholder="Buyer" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Lampiran</Form.Label>
										<Form.Control placeholder="Tidak Ada" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="mb-3 form-textarea">
										<Form.Label className="form-label-konfirmasi">Detail Bantuan</Form.Label>
										<Form.Control as="textarea" placeholder="lorem" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Nama Brand</Form.Label>
										<Form.Control placeholder="Toko AAA" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
								</Col>
								<Col>
									<Form.Group className="mb-3">
										<Form.Label className="form-label-konfirmasi">Kategori Akun</Form.Label>
										<Form.Control placeholder="Seller" readOnly className="form-konfirmas-placeholder" />
									</Form.Group>
								</Col>
							</Row>
							<Row>
								<Col>
									<Form.Group className="mb-3 form-textarea">
										<Form.Label className="form-label-konfirmasi">Solusi</Form.Label>
										<Form.Control
											as="textarea"
											placeholder="Silahkan Isi solusi disini"
											className="form-konfirmas-placeholder"
										/>
									</Form.Group>
								</Col>
							</Row>
							<div className="d-flex justify-content-end mb-3 mt-3">
								<button className="mx-2 btn-modal-kembali p-1" onClick={props.closePenyelesaian}>
									Kembali
								</button>
								<Link to="/pusatbantuan" style={{ textDecoration: "none" }}>
								<button id="btnKonfirm" onClick={KonfBantuan} className="btn-modal-konfirmasi p-1" >Konfirmasi</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
}

export default ModalPenyelesaian;
