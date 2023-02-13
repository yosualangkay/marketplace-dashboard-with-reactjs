import React from "react";
import { Row, Col, Button, Container, Form } from "react-bootstrap";
import "../../css/DetailSeller.css";

function ProfilUsaha() {
	return (
		<>
			<Container fluid className="boxProfileUsaha ">
				<div>
					<div className=" pt-3 label-info d-flex align-items-center py-2">
						<p className="basicInfo ms-3">Basic Info</p>
					</div>
					<div className="info mx-3 mt-4 pb-5">
						<Row>
							<Col className="label-form">Brand Name</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="Red Bull" />
							</Col>
						</Row>
						<Row className="  my-3">
							<Col className="label-form">Kepemilikan Usaha</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="Milik Sendiri" />
							</Col>
						</Row>
						<Row className="  my-3">
							<Col className="label-form">Kategori Usaha</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="21-07-2000" />
							</Col>
						</Row>
						<Row className=" my-3 ">
							<Col className="label-form">Alamat Dana</Col>
							<Col className="input-form">
								<textarea
									class="form-control"
									aria-label="With textarea"
									placeholder="Jl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at magna mollis, fermentum metus nec, feugiat odio. Aenean iaculis diam at odio feugiat placerat. In molestie tincidunt libero"
								/>
							</Col>
						</Row>
						<Row className="  my-3">
							<Col className="label-form">Nomor Telepon</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="08977882661" />
							</Col>
						</Row>
						<Row className="  my-3">
							<Col className="label-form">Alamat e-mail</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="contactus@redbull.com" />
							</Col>
						</Row>
						<div className="d-flex boxLabelRekening pb-3">
							<span>
								<p className="labelRekning me-2">Rekening Usaha</p>
							</span>
							<span>
								<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
										fill="#00A3FF"
									/>
									<path
										d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
										fill="white"
									/>
								</svg>
							</span>
						</div>
						<Row className="  my-4">
							<Col className="label-form">Nama Bank</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="Bank BCA" />
							</Col>
						</Row>
						<Row className="  my-4">
							<Col className="label-form">Nomor Rekening</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="0877328123129" />
							</Col>
						</Row>
						<Row className="  my-4">
							<Col className="label-form">Nama Pemilik Usaha</Col>
							<Col className="input-form">
								<input type="text" className="form-control" placeholder="0877328123129" />
							</Col>
						</Row>
					</div>
					<div className="box-btn-ubah d-flex justify-content-end align-items-center ms-3">
						<span className="me-5 pe-5">
							<Button className="btn-ubah">Ubah Profil</Button>
						</span>
					</div>
				</div>
			</Container>
			<Container fluid className="boxProfileUsaha mt-3">
				<div className=" pt-3 label-info d-flex align-items-center py-3">
					<p className="basicInfo ms-3">Social Media</p>
				</div>
				<div className="box-info-sosmed mx-3 mt-4 pb-3">
					<Row className="infoSosmed pb-4">
						<Col>
							<div className="d-flex align-items-center">
								<div>
									<svg width="34" height="34" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M27.9851 14.2619C27.9851 13.1147 27.8899 12.2776 27.6837 11.4095H14.2788V16.5872H22.1472C21.9886 17.8739 21.132 19.8116 19.2283 21.1138L19.2016 21.2871L23.44 24.4957L23.7336 24.5243C26.4304 22.0904 27.9851 18.5094 27.9851 14.2619"
											fill="#4285F4"
										/>
										<path
											d="M14.2789 27.9039C18.1338 27.9039 21.37 26.6637 23.7338 24.5244L19.2284 21.1139C18.0228 21.9355 16.4046 22.5091 14.2789 22.5091C10.5034 22.5091 7.29888 20.0753 6.15658 16.7113L5.98914 16.7252L1.582 20.0582L1.52436 20.2148C3.87219 24.7724 8.6948 27.9039 14.2789 27.9039Z"
											fill="#34A853"
										/>
										<path
											d="M6.15656 16.7114C5.85516 15.8433 5.68072 14.9131 5.68072 13.952C5.68072 12.9908 5.85516 12.0607 6.14071 11.1926L6.13272 11.0077L1.67036 7.62121L1.52435 7.68907C0.556705 9.58035 0.00146523 11.7042 0.00146523 13.952C0.00146523 16.1998 0.556705 18.3235 1.52435 20.2148L6.15656 16.7114"
											fill="#FBBC05"
										/>
										<path
											d="M14.2789 5.39472C16.9598 5.39472 18.7683 6.52637 19.7995 7.47207L23.8289 3.62752C21.3542 1.37972 18.1338 2.28882e-05 14.2789 2.28882e-05C8.69479 2.28882e-05 3.87218 3.13143 1.52436 7.68901L6.14071 11.1925C7.29888 7.82859 10.5033 5.39472 14.2789 5.39472"
											fill="#EB4335"
										/>
									</svg>
								</div>
								<div className="d-flex flex-column ms-2">
									<div>
										<span className="me-1 labelBasicInfo"> Website</span>
										<span>
											<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
													fill="#00A3FF"
												/>
												<path
													d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
													fill="white"
												/>
											</svg>
										</span>
									</div>
									<span className=" hintBasicInfo">Plan properly your workflow</span>
								</div>
							</div>
						</Col>
						<Col>
							<div className="website  d-flex align-items-end justify-content-end">
								<a href="http">www.redbull.com</a>
							</div>
						</Col>
					</Row>
					<Row className="infoSosmed pb-4 mt-3">
						<Col>
							<div className="d-flex align-items-center">
								<div>
									<svg width="43" height="43" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="30" height="30" fill="white" />
										<circle cx="15" cy="15" r="12.5" fill="#C13584" />
										<path
											d="M15 8.85136C17.0026 8.85136 17.2398 8.85901 18.0307 8.89509C18.7619 8.92843 19.159 9.05062 19.4233 9.15333C19.7734 9.28938 20.0232 9.4519 20.2857 9.71433C20.5481 9.9768 20.7106 10.2266 20.8467 10.5767C20.9494 10.841 21.0716 11.2381 21.1049 11.9694C21.141 12.7602 21.1487 12.9974 21.1487 15C21.1487 17.0026 21.141 17.2398 21.1049 18.0306C21.0716 18.7619 20.9494 19.159 20.8467 19.4233C20.7106 19.7733 20.5481 20.0232 20.2857 20.2856C20.0232 20.5481 19.7734 20.7106 19.4233 20.8466C19.159 20.9494 18.7619 21.0715 18.0307 21.1049C17.2399 21.141 17.0027 21.1486 15 21.1486C12.9973 21.1486 12.7601 21.141 11.9694 21.1049C11.2381 21.0715 10.841 20.9494 10.5767 20.8466C10.2266 20.7106 9.97681 20.5481 9.71437 20.2856C9.45194 20.0232 9.28939 19.7733 9.15333 19.4233C9.05062 19.159 8.92844 18.7619 8.8951 18.0306C8.85901 17.2398 8.85136 17.0026 8.85136 15C8.85136 12.9974 8.85901 12.7602 8.8951 11.9694C8.92844 11.2381 9.05062 10.841 9.15333 10.5767C9.28939 10.2266 9.45191 9.9768 9.71437 9.71436C9.97681 9.4519 10.2266 9.28938 10.5767 9.15333C10.841 9.05062 11.2381 8.92843 11.9694 8.89509C12.7602 8.85901 12.9974 8.85136 15 8.85136ZM15 7.50001C12.9631 7.50001 12.7077 7.50865 11.9078 7.54515C11.1095 7.58156 10.5643 7.70835 10.0872 7.89374C9.59404 8.0854 9.17578 8.34185 8.7588 8.7588C8.34186 9.17577 8.08541 9.59403 7.89377 10.0872C7.70835 10.5643 7.58156 11.1095 7.54515 11.9078C7.50865 12.7077 7.50001 12.9631 7.50001 15C7.50001 17.0369 7.50865 17.2923 7.54515 18.0922C7.58156 18.8905 7.70835 19.4357 7.89377 19.9128C8.08541 20.4059 8.34186 20.8242 8.7588 21.2412C9.17578 21.6581 9.59404 21.9146 10.0872 22.1062C10.5643 22.2916 11.1095 22.4184 11.9078 22.4548C12.7077 22.4913 12.9631 22.5 15 22.5C17.0369 22.5 17.2923 22.4913 18.0923 22.4548C18.8905 22.4184 19.4357 22.2916 19.9128 22.1062C20.406 21.9146 20.8242 21.6581 21.2412 21.2412C21.6582 20.8242 21.9146 20.4059 22.1063 19.9128C22.2917 19.4357 22.4185 18.8905 22.4549 18.0922C22.4914 17.2923 22.5 17.0369 22.5 15C22.5 12.9631 22.4914 12.7077 22.4549 11.9078C22.4185 11.1095 22.2917 10.5643 22.1063 10.0872C21.9146 9.59403 21.6582 9.17577 21.2412 8.7588C20.8242 8.34185 20.406 8.0854 19.9128 7.89374C19.4357 7.70835 18.8905 7.58156 18.0923 7.54515C17.2923 7.50865 17.0369 7.50001 15 7.50001Z"
											fill="white"
										/>
										<path
											d="M15.0035 11.1521C12.8764 11.1521 11.1521 12.8764 11.1521 15.0035C11.1521 17.1305 12.8764 18.8548 15.0035 18.8548C17.1305 18.8548 18.8548 17.1305 18.8548 15.0035C18.8548 12.8764 17.1305 11.1521 15.0035 11.1521ZM15.0035 17.5035C13.6228 17.5035 12.5035 16.3842 12.5035 15.0035C12.5035 13.6228 13.6228 12.5035 15.0035 12.5035C16.3842 12.5035 17.5035 13.6228 17.5035 15.0035C17.5035 16.3842 16.3842 17.5035 15.0035 17.5035Z"
											fill="white"
										/>
										<path
											d="M19.9067 10.9976C19.9067 11.4946 19.5038 11.8976 19.0067 11.8976C18.5097 11.8976 18.1067 11.4946 18.1067 10.9976C18.1067 10.5005 18.5097 10.0976 19.0067 10.0976C19.5038 10.0976 19.9067 10.5005 19.9067 10.9976Z"
											fill="white"
										/>
									</svg>
								</div>
								<div className="d-flex flex-column ms-2">
									<div>
										<span className="me-1 labelBasicInfo"> Instagram</span>
										<span>
											<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
													fill="#00A3FF"
												/>
												<path
													d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
													fill="white"
												/>
											</svg>
										</span>
									</div>
									<span className=" hintBasicInfo">Plan properly your workflow</span>
								</div>
							</div>
						</Col>
						<Col>
							<div className="website  d-flex align-items-end justify-content-end">
								<a href="http">@redbull</a>
							</div>
						</Col>
					</Row>
					<Row className="infoSosmed pb-4 mt-3">
						<Col>
							<div className="d-flex align-items-center">
								<div>
									<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="30" height="30" fill="white" />
										<circle cx="15" cy="15" r="12.5" fill="#FF0000" />
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M22.0628 10.2363C22.3122 10.4857 22.492 10.7962 22.5841 11.1367C23.1147 13.2723 22.9921 16.6453 22.5944 18.8633C22.5023 19.2038 22.3225 19.5143 22.0731 19.7637C21.8237 20.0131 21.5132 20.1929 21.1727 20.285C19.9262 20.625 14.909 20.625 14.909 20.625C14.909 20.625 9.89182 20.625 8.64525 20.285C8.30474 20.1929 7.99431 20.0131 7.74487 19.7637C7.49543 19.5143 7.31569 19.2038 7.22355 18.8633C6.6899 16.737 6.83619 13.362 7.21325 11.147C7.30539 10.8065 7.48513 10.496 7.73457 10.2466C7.984 9.99716 8.29444 9.81741 8.63495 9.72528C9.88152 9.3853 14.8987 9.375 14.8987 9.375C14.8987 9.375 19.9159 9.375 21.1624 9.71497C21.5029 9.80712 21.8134 9.98686 22.0628 10.2363ZM17.4639 15L13.3018 17.4107V12.5893L17.4639 15Z"
											fill="white"
										/>
									</svg>
								</div>
								<div className="d-flex flex-column ms-2">
									<div>
										<span className="me-1 labelBasicInfo"> Youtube</span>
										<span>
											<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
													fill="#00A3FF"
												/>
												<path
													d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
													fill="white"
												/>
											</svg>
										</span>
									</div>
									<span className=" hintBasicInfo">Plan properly your workflow</span>
								</div>
							</div>
						</Col>
						<Col>
							<div className="website  d-flex align-items-end justify-content-end">
								<a href="http">@YutubeRedbull</a>
							</div>
						</Col>
					</Row>
					<Row className="infoSosmed pb-4 mt-3">
						<Col>
							<div className="d-flex align-items-center">
								<div>
									<svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<rect width="30" height="30" fill="white" />
										<circle cx="15" cy="15" r="12.5" fill="#3B5998" />
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M18.3219 10.5986C17.9323 10.5207 17.4061 10.4625 17.0752 10.4625C16.1792 10.4625 16.121 10.8521 16.121 11.4754V12.585H18.3609L18.1656 14.8836H16.121V21.875H13.3165V14.8836H11.875V12.585H13.3165V11.1633C13.3165 9.21583 14.2317 8.125 16.5298 8.125C17.3282 8.125 17.9126 8.24188 18.6721 8.39771L18.3219 10.5986Z"
											fill="white"
										/>
									</svg>
								</div>
								<div className="d-flex flex-column ms-2">
									<div>
										<span className="me-1 labelBasicInfo"> Facebook</span>
										<span>
											<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
													fill="#00A3FF"
												/>
												<path
													d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
													fill="white"
												/>
											</svg>
										</span>
									</div>
									<span className=" hintBasicInfo">Plan properly your workflow</span>
								</div>
							</div>
						</Col>
						<Col>
							<div className="website  d-flex align-items-end justify-content-end">
								<a href="http">@FaceBookRedbull</a>
							</div>
						</Col>
					</Row>
					<Row className=" pb-4 mt-3">
						<Col>
							<div className="d-flex align-items-center">
								<div>
									<svg width="40" height="39" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clip-path="url(#clip0_210_16168)">
											<path
												d="M14.5 0C6.4886 0 0 6.36012 0 14.2129C0 20.8923 4.67579 26.436 10.9842 27.9988C10.9114 27.821 10.8756 27.5718 10.8756 27.3238V24.907H9.06281C8.08421 24.907 7.17719 24.4813 6.7786 23.6986C6.30719 22.8459 6.23438 21.531 5.0386 20.7133C4.67579 20.4291 4.96579 20.1448 5.36438 20.1799C6.12579 20.3928 6.74157 20.8911 7.32157 21.6363C7.90157 22.3826 8.15579 22.5604 9.24298 22.5604C9.75017 22.5604 10.5474 22.5253 11.273 22.4177C11.6716 21.4222 12.3602 20.5343 13.1944 20.1085C8.33719 19.54 6.01719 17.1946 6.01719 13.9964C6.01719 12.6102 6.63298 11.2953 7.6486 10.1583C7.32281 9.05633 6.88719 6.78227 7.79421 5.89442C9.96983 5.89442 11.2742 7.28063 11.6 7.63504C12.6872 7.27942 13.8842 7.06653 15.1158 7.06653C16.3844 7.06653 17.5444 7.27942 18.6316 7.63504C18.9574 7.27942 20.263 5.89442 22.4374 5.89442C23.3074 6.74719 22.9088 9.05633 22.546 10.1583C23.5616 11.2602 24.1416 12.6102 24.1416 13.9964C24.1416 17.1946 21.8574 19.54 17.0372 20.0372C18.3786 20.7121 19.3214 22.6306 19.3214 24.0518V27.2888C19.3214 27.3952 19.2856 27.5016 19.2856 27.6081C24.94 25.6896 29 20.4315 29 14.2129C29 6.36012 22.5114 0 14.5 0Z"
												fill="#596482"
											/>
											<rect width="30" height="30" transform="translate(-1 -1)" fill="white" />
											<circle cx="14" cy="14" r="12.5" fill="#1DA1F2" />
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M21.5 9.1929C20.9485 9.43789 20.3551 9.60287 19.7326 9.67737C20.3681 9.29639 20.856 8.69344 21.0855 7.97498C20.4916 8.32796 19.8321 8.58344 19.1317 8.72194C18.5702 8.12398 17.7697 7.75 16.8853 7.75C15.1859 7.75 13.808 9.12791 13.808 10.8273C13.808 11.0683 13.8355 11.3033 13.888 11.5287C11.3302 11.4008 9.06283 10.1753 7.54493 8.31346C7.27995 8.76793 7.12846 9.2964 7.12846 9.86036C7.12846 10.9278 7.67092 11.8697 8.49737 12.4217C7.9924 12.4057 7.51843 12.2672 7.10296 12.0367V12.0752C7.10296 13.5666 8.16439 14.81 9.57129 15.0935C9.31331 15.1635 9.04133 15.2015 8.76085 15.2015C8.56236 15.2015 8.36937 15.182 8.18139 15.146C8.57286 16.3684 9.70979 17.2584 11.0562 17.2834C10.0033 18.1083 8.67635 18.6008 7.23445 18.6008C6.98547 18.6008 6.74048 18.5863 6.5 18.5573C7.86191 19.4302 9.4793 19.9402 11.2172 19.9402C16.8773 19.9402 19.9726 15.251 19.9726 11.1848C19.9726 11.0513 19.9701 10.9183 19.9636 10.7868C20.5656 10.3518 21.0875 9.80986 21.5 9.1929Z"
												fill="white"
											/>
										</g>
										<defs>
											<clipPath id="clip0_210_16168">
												<rect width="29" height="28" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</div>
								<div className="d-flex flex-column ms-2">
									<div>
										<span className="me-1 labelBasicInfo"> Twitter</span>
										<span>
											<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M8.82113 3.25867C9.5243 1.89383 11.4757 1.89383 12.1789 3.25867V3.25867C12.6014 4.07878 13.5546 4.47361 14.4333 4.19247V4.19247C15.8956 3.7246 17.2754 5.10445 16.8075 6.56674V6.56674C16.5264 7.44542 16.9212 8.39861 17.7413 8.82113V8.82113C19.1062 9.5243 19.1062 11.4757 17.7413 12.1789V12.1789C16.9212 12.6014 16.5264 13.5546 16.8075 14.4333V14.4333C17.2754 15.8956 15.8956 17.2754 14.4333 16.8075V16.8075C13.5546 16.5264 12.6014 16.9212 12.1789 17.7413V17.7413C11.4757 19.1062 9.5243 19.1062 8.82113 17.7413V17.7413C8.39861 16.9212 7.44542 16.5264 6.56674 16.8075V16.8075C5.10445 17.2754 3.7246 15.8956 4.19247 14.4333V14.4333C4.47361 13.5546 4.07878 12.6014 3.25867 12.1789V12.1789C1.89383 11.4757 1.89383 9.5243 3.25867 8.82113V8.82113C4.07878 8.39861 4.47361 7.44542 4.19247 6.56674V6.56674C3.7246 5.10445 5.10445 3.7246 6.56674 4.19247V4.19247C7.44542 4.47361 8.39861 4.07878 8.82113 3.25867V3.25867Z"
													fill="#00A3FF"
												/>
												<path
													d="M12.9997 8.04148C13.1786 7.83108 13.4554 7.82116 13.6658 8C13.8762 8.17884 13.8455 8.45626 13.6667 8.66667L10.3806 12.8238C10.199 13.0375 9.87711 13.06 9.66748 12.8737L7.41748 10.8737C7.21109 10.6902 7.1925 10.3742 7.37596 10.1678C7.55941 9.96142 7.87545 9.94283 8.08184 10.1263L9.94977 11.7867L12.9997 8.04148Z"
													fill="white"
												/>
											</svg>
										</span>
									</div>
									<span className=" hintBasicInfo">Plan properly your workflow</span>
								</div>
							</div>
						</Col>
						<Col>
							<div className="website  d-flex align-items-end justify-content-end">
								<a href="http">@Redbull</a>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
			<Container fluid className="boxProfileUsaha mt-3 pb-4">
				<div className=" pt-3 label-info d-flex align-items-center">
					<p className="ms-3 basicInfo py-2">Nonaktifkan Akun</p>
				</div>
				<div className="nonAktifAkun d-flex mt-4 ms-3 p-2">
					<span>
						<svg width="34" height="34" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								opacity="0.3"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16.4412 30.1422C24.0081 30.1422 30.1422 24.008 30.1422 16.4412C30.1422 8.87435 24.0081 2.74021 16.4412 2.74021C8.87438 2.74021 2.74024 8.87435 2.74024 16.4412C2.74024 24.008 8.87438 30.1422 16.4412 30.1422Z"
								fill="#F89C47"
							/>
							<rect x="15.0711" y="9.59067" width="2.7402" height="10.9608" rx="1" fill="#F89C47" />
							<rect x="15.0711" y="21.9216" width="2.7402" height="2.7402" rx="1" fill="#F89C47" />
						</svg>
					</span>
					<div className="d-flex flex-column ms-2">
						<span className="labelWarning">Anda Akan Menonaktifkan Akun Ini</span>
						<span className="w-75 labelWaringText">
							Untuk keamanan, anda memerlukan verifikasi e-mail dan password sebelum menonaktifkan akun.{" "}
							<a href="ww">Pelajari Selengkapnya</a>
						</span>
					</div>
				</div>
				<div className="mt-3 ms-3 formCheck">
					<Form.Group className="">
						<Form.Check type="checkbox" label="Konfirmasi Nonaktif Akun" />
					</Form.Group>
				</div>
				<div className="d-flex mt-4 ms-3 p-2 justify-content-end btn-nonAktiv" style={{ width: "74vw" }}>
					<Button>Nonaktifkan Akun</Button>
				</div>
			</Container>
		</>
	);
}

export default ProfilUsaha;
