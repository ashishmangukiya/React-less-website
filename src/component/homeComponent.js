import React from 'react';
import logo from '../assets/logo.png';
import shopping from "../assets/shopping.webp";
import description1 from "../assets/descriptions1.jpg";
import user from "../assets/user.jpeg";
import user2 from "../assets/user2.jpeg";
import menu from "../assets/menu.png";
import description3 from "../assets/description3-side.jpeg";
import './home.scss'
import $ from 'jquery';

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			tagName: 'DETAILS'
		}
	}
	changeTagName(name) {
		this.setState({ tagName: name })
	}
	componentDidMount() {
		$(window).scroll((event) => {
			var header = $('.nav-fixed').outerHeight();
			if (!($(window).scrollTop() + header >= $("#1").offset().top + $("#1").height() || $(window).scrollTop() + header < $("#1").offset().top)) {
				$("a").removeClass('active-link');
				$(".link1").addClass('active-link');
				this.changeTagName('Details')
			} else if (!($(window).scrollTop() + header >= $("#2").offset().top + $("#2").height() || $(window).scrollTop() + header < $("#2").offset().top)) {
				$("a").removeClass('active-link');
				$(".link2").addClass('active-link');
				this.changeTagName('Descriptions')
			} else if (!($(window).scrollTop() + header >= $("#3").offset().top + $("#3").height() || $(window).scrollTop() + header < $("#3").offset().top)) {
				$('#3').addClass('description-2-active');
			} else if (!($(window).scrollTop() + header >= $("#4").offset().top + $("#4").height() || $(window).scrollTop() + header < $("#4").offset().top)) {
				$('#4').addClass('description-3-active');
			} else if (!($(window).scrollTop() + header >= $("#5").offset().top + $("#5").height() || $(window).scrollTop() + header < $("#5").offset().top)) {
				$("a").removeClass('active-link');
				$(".link3").addClass('active-link');
				this.changeTagName('Reviews')
			} else if (!($(window).scrollTop() + header >= $("#6").offset().top + $("#6").height() || $(window).scrollTop() + header < $("#6").offset().top)) {
				$("a").removeClass('active-link');
				$(".link4").addClass('active-link');
				this.changeTagName('Related')
			}
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="header">
					<div className="nav-fixed">
						<div className="header-sub">
							<div className="row remove-margin">
								<div className="col-6 col-lg-3 col-xl-2 remove-padding">
									<img alt="" src={menu} data-toggle="collapse" data-target="#demo" className="menu-style" />
									<img alt="" src={logo} className="logo-style" />
								</div>
								<div className="col-6 col-lg-9 col-xl-10 remove-padding center">
									<div className="tabs">
										<div className="link">
											BEDROOM
										</div>
										<div className="link">
											LIVING ROOM
										</div>
										<div className="link">
											OFFICE
										</div>
										<div className="link">
											KITCHEN
										</div>
										<div className="link">
											BATHROOM
										</div>
									</div>
									<div className="flex notification">
										<div>
											<i className="fa fa-search"></i>
										</div>
										<div>
											<i className="fa fa-heart"></i>
										</div>
										<div className="nodge flex">
											<i className="fa fa-save"></i>
											<sup >2</sup>
										</div>
									</div>
								</div>
							</div>
							<div id="demo" className="collapse">
								<div className="tabs1">
									<div className="link">
										BEDROOM
										</div>
									<div className="link">
										LIVING ROOM
										</div>
									<div className="link">
										OFFICE
										</div>
									<div className="link">
										KITCHEN
										</div>
									<div className="link">
										BATHROOM
										</div>
								</div>
							</div>
						</div>
						<hr className="remove-margin white"></hr>
						<div className="row remove-margin">
							<div className="col-lg-12 d-none d-lg-block d-xl-block remove-padding">
								<div className="routes flex">
									<i className="fa fa-home home "></i>
									<i className="fa fa-caret-right caret padding-short"></i>
									<div className="routes-link padding-short">CATALOG</div>
									<i className="fa fa-caret-right caret padding-short"></i>
									<div className="routes-link padding-short">SOFAS</div>
									<i className="fa fa-caret-right caret padding-short"></i>
									<div className="routes-link active padding-short">BEIGE NUDIE SOFA</div>
								</div>
							</div>
							<div className="col-12 d-lg-none d-xl-none remove-padding">
								<div className="tabs3 flex-center">
									<div className="link">
										<a className="nav-items link1 active-link" href="#1" >DETAILS</a>
									</div>
									<div className="link ">
										<a className="nav-items link2" href="#2">DESCRIPTIONS</a>
									</div>
									<div className="link ">
										<a className="nav-items link3" href="#5">REVIEWS</a>
									</div>
									<div className="link ">
										<a className="nav-items link4" href="#6">RELATED</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div >
						<div className="row remove-margin" >
							<div className="d-none col-lg-3 col-xl-3 d-lg-block d-xl-block remove-padding"  >
								<div className="fixed-side-panel" >
									<div className="rotate" >
										{this.state.tagName.toLowerCase()}
									</div>
									<div className="padding-top-box" >
										<div className="padding-big">
											<a className="nav-items side-links link1 active-link" href="#1">DETAILS</a>
										</div>
										<div className="padding-big">
											<a className="nav-items link2 side-links" href="#2">DESCRIPTIONS</a>
										</div>
										<div className="padding-big">
											<a className="nav-items link3 side-links" href="#5">REVIEWS</a>
										</div>
										<div className="padding-big">
											<a className="nav-items link4 side-links" href="#6">RELATED</a>
										</div>
										<div className="flex-wrap padding-icons">
											<i className="fa fa-facebook medium-font padding"></i>
											<i className="fa fa-twitter medium-font padding"></i>
											<i className="fa fa-bullseye medium-font padding"></i>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-9 col-xl-9 remove-padding" >
								<div >
									<div className="padding-left" id="1">
										<div className="Details-header ">
											<div className="row remove-margin">
												<div className="col-12 col-sm-6 remove-padding">
													<img alt="" src={shopping} className="details-image" />
												</div>
												<div className="col-12 col-sm-6 remove-padding">
													<div className="item-box">
														<div className="item-title">
															Nudie Extendable Sofa For 5 persons.
										</div>
														<div className="item-rating">
															<i className="fa fa-star brand-color"></i>
															<i className="fa fa-star brand-color"></i>
															<i className="fa fa-star brand-color"></i>
															<i className="fa fa-star brand-color"></i>
															<i className="fa fa-star light-gray"></i>
															<span >(23)</span>
														</div>
														<div className="item-price">
															<span className="light-gray line-through">$169</span>
															<span className="black">$149</span>
														</div>
														<hr />
														<div className="item-info">
															<ul>
																<li><b>ASSEMBLY:</b> Carpenter Assembly</li>
																<li><b>WARRANTY:</b> 12 Month Warranty</li>
															</ul>
														</div>
														<hr />
														<div className="item-policy flex-start">
															<div className="dispatch flex-start">
																<div>
																	<i className="fa fa-truck"></i>
																</div>
																<span >SAME DAY DISPATCH</span>
															</div>
															<div className="dispatch flex-start">
																<div>
																	<i className="fa fa-amazon"></i>
																</div>
																<span>EASY-30 DAY RETURN POLICY</span>
															</div>
														</div>
														<div className="item-multi-color">
															<b className="font-medium">COLOR:</b>
															<div className="multi-color flex-start">
																<div className="circle-color-gold circle">
																</div>
																<div className="circle-color-black circle">
																	<span>&#x2714;</span>
																</div>
																<div className="circle-color-white circle">
																</div>
															</div>
														</div>
														<div className="add-to-cart flex-start">
															<div className="plus-minus">
																<span>-</span>
																<span>1</span>
																<span>+</span>
															</div>
															<div className="add-to-cart-button">
																<span>ADD TO CART</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="description-1" id="2">
										<div className="description-background">
											<div className="row remove-margin">
												<div className="col-12 col-sm-3 col-md-3 col-xl-5 remove-padding" >
													<div className="decription-text-header">
														At vero eos et accusamus et iusto odio dignissimos.
									</div>
													<div className="decription-1-text-paragraph">
														<p className="remove-margin">Lorem ipsum dolor sit amet, his in agam nostrud, duo at doming dictas denique. Sea ex mutat choro nullam, ad quo quis oratio dissentiunt, assum mucius fuisset cum ex. Mea sint petentium scripserit ei, an fugit etiam nam. Vis et adhuc zril, eos ex tale menandri moderatius, et modus scripta accusamus vis.</p>
														<p className="remove-margin"> Vis eu adhuc dicunt integre. Cibo platonem ne ius. Sea ex mutat choro nullam, ad quo quis oratio dissentiunt.</p>
													</div>
												</div>
												<div className="col-12 col-sm-9 col-md-9 col-xl-7 remove-padding">
													<img alt="" src={description1} className="description-image-1" />
												</div>
											</div>
										</div>
									</div>
									<div className="description-2" id="3">
										<div className="description-2-background">
											<div className="row remove-margin">
												<div className="col-12 remove-padding" >
													<div className="description-2-image">
														<div className="decription-1-text-header ">
															At vero eos et accusamus et iusto odio dignissimos.
												</div>
														<div className="description-2-button">
															<div className="button-style">
																<i className="fa fa-caret-right black"></i>
															</div>
														</div>
													</div>

												</div>
												<div className="decription-2-text-header ">
													At vero eos et accusamus et iusto odio dignissimos.
												</div>
											</div>
										</div>
									</div>
									<div className="description-3" id="4">
										<div className="row remove-margin">
											<div className="col-12 remove-padding" >
												<div className="description-3-image">
													<div className="rotate1" >
														SUGESTED ACCOMODATION
												</div>
													<div className="description-3-side-image">
														<img alt="" src={description3} className="description-3-side-image-style" />
													</div>
													<div className="download-pdf-button flex-center" >
														<i className="fa fa-download black"></i>
														<span>DOWNLOAD PDF</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="reviews" id="5">
										<div className="row remove-margin ">
											<div className="col-12 remove-padding">
												<div className="review-header">
													23 Reviews For Nudie Extendable Sofa
											</div>
												<div className="item-rating">
													<i className="fa fa-star brand-color"></i>
													<i className="fa fa-star brand-color"></i>
													<i className="fa fa-star brand-color"></i>
													<i className="fa fa-star brand-color"></i>
													<i className="fa fa-star light-gray"></i>
													<span >4.31 (61 reviews)</span>
												</div>
											</div>
											<div className="row remove-margin padding-top">
												<div className="col-md-4 remove-padding">
													<div className="flex-start review-control ">
														<img alt="" src={user} className="review-user" />
														<div className="user-name-block">
															<div className="user-name">
																Johnatan Doe
														</div>
															<div className="gray createdAt">
																August 28,2019
														</div>
														</div>
													</div>
												</div>
												<div className="col-md-8 remove-padding">
													<b>Excelent</b>
													<div className="item-rating padding-vertical">
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star light-gray"></i>
													</div>
													<div className="review-text-paragraph padding-bottom">
														<p className="remove-margin">Lorem ipsum dolor sit amet, his in agam nostrud, duo at doming dictas denique. Sea ex mutat choro nullam, ad quo quis oratio dissentiunt, assum mucius fuisset cum ex. Mea sint petentium scripserit ei, an fugit etiam nam. Vis et adhuc zril, eos ex tale menandri moderatius, et modus scripta accusamus vis. Vis eu adhuc dicunt integre. Cibo platonem ne ius, est no libris maiorum, debet comprehensam quo ei. Vim fastidii necessitatibus an, idque dicunt omittantur ex sea duo at doming dictas denique. Sea ex mutat choro nullam, ad quo quis oratio dissentiunt.</p>
													</div>
													<b >Add comment</b>
												</div>
											</div>
											<div className="row remove-margin padding-top">
												<div className="col-md-4 remove-padding">
													<div className="flex-start review-control ">
														<img alt="" src={user2} className="review-user" />
														<div className="user-name-block">
															<div className="user-name">
																Johnatan Doe
														</div>
															<div className="gray createdAt">
																August 28,2019
														</div>
														</div>
													</div>
												</div>
												<div className="col-md-8 remove-padding">
													<b>Excelent</b>
													<div className="item-rating padding-vertical">
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star brand-color"></i>
														<i className="fa fa-star light-gray"></i>
													</div>
													<div className="review-text-paragraph padding-bottom">
														<p className="remove-margin">Lorem ipsum dolor sit amet, his in agam nostrud, duo at doming dictas denique. Sea ex mutat choro nullam, ad quo quis oratio dissentiunt, assum mucius fuisset cum ex. Mea sint petentium scripserit ei, an fugit etiam nam. Vis et adhuc zril, eos ex tale menandri moderatius, et modus scripta accusamus vis. Vis eu adhuc dicunt integre. Cibo platonem ne ius, est no libris maiorum, debet comprehensam quo ei. Vim fastidii necessitatibus an, idque dicunt omittantur ex sea duo at doming dictas denique. Sea ex mutat choro nullam, ad quo quis oratio dissentiunt.</p>
													</div>
													<b >Add comment</b>
												</div>
											</div>
											<div className="col-12 remove-padding flex-center ">
												<div className="load-more ">
													<b>Load More (21)</b>
												</div>
											</div>
										</div>
									</div>
									<div className="related-product" id="6">
										<div className="related-product-header">
											Related products
											</div>
										<div className="row remove-margin">
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/ovens.jpeg")} className="product-image" />
													<div className="product-title">
														Oven
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/chip.jpeg")} className="product-image" />
													<div className="product-title">
														Chip
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/headphones.jpg")} className="product-image" />
													<div className="product-title">
														Headphone
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/burner.jpeg")} className="product-image" />
													<div className="product-title">
														Burner
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/mouse.jpeg")} className="product-image" />
													<div className="product-title">
														Mouse
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/headphones.jpg")} className="product-image" />
													<div className="product-title">
														Headphone
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/burner.jpeg")} className="product-image" />
													<div className="product-title">
														Burner
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
											<div className="col-6 col-sm-4 col-md-3 col-lg-3 remove-padding">
												<div className="product-background flex-center-column ">
													<img alt="" src={require("../assets/chip.jpeg")} className="product-image" />
													<div className="product-title">
														Chip
											</div>
													<div className="product-price">
														<span className="light-gray line-through">$169</span>
														<span className="black">$149</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="row remove-margin padding-top">
										<div className="col-12 remove-padding footer">
											<div className="col-5 remove-padding mx-auto">
												<div className="footer-title">
													Grab Our Newsletter
												</div>
												<hr />
											</div>
											<div className="col-12 remove-padding">
												<div className="footer-menu">
													<hr />
													<div className="footer-details" >
														<div className="footer-social">
															<div className="padding-icon">
																<i className="fa fa-facebook medium-font padding-big"></i>
																<i className="fa fa-twitter medium-font padding-big"></i>
																<i className="fa fa-bullseye medium-font padding-big"></i>
															</div>
														</div>
														<div className="footer-button">
															<div className="link">
																BEDROOM
															</div>
															<div className="link">
																LIVING ROOM
															</div>
															<div className="link">
																OFFICE
															</div>
															<div className="link">
																KITCHEN
															</div>
															<div className="link">
																BATHROOM
															</div>
														</div>
														<img alt="" src={logo} className="logo-style1" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}