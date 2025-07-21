"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const UserAvatar = "/assets/images/users/avatar-6.png";

const Header = ({
	drawerOpen,
	onToogleDrawer,
}: {
	drawerOpen: boolean;
	onToogleDrawer: () => void;
}) => {
	const [language, setLanguage] = useState<boolean>(false);
	const [alerts, setAlerts] = useState<boolean>(false);
	const [userProfile, setUserProfile] = useState<boolean>(false);

	const { logout } = useAuth();
	const { data: user, isLoading } = useCurrentUser();

	const openLanguage = () => {
		setLanguage(!language);
		setAlerts(false);
		setUserProfile(false);
	};

	const openAlerts = () => {
		setLanguage(false);
		setAlerts(!alerts);
		setUserProfile(false);
	};

	const openUserProfile = () => {
		setLanguage(false);
		setAlerts(false);
		setUserProfile(!userProfile);
	};

	const handleLogout = async () => {
		await logout();
	};

	return (
		<header className="backdrop-blur-[8px] box-border fixed flex flex-col left-auto shadow-none right-0 shrink-0 text-white top-0 z-[1000] w-full lg:ml-[280]">
			<div className="flex items-center justify-between min-h-[74px] px-4 py-2 relative md:px-6 xl:px-16">
				<button
					className="
            inline-flex
            items-center
            justify-center
            box-border
            outline-0
            border-0
            m-0
            cursor-pointer
            align-middle
            text-center
            overflow-visible
            rounded-[8px]
            w-[44px]
            h-[44px]
            text-sm
            relative
            bg-[#f3f5f7]
            p-[8px]
          "
					style={{
						transition:
							"background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
						flex: "0 0 auto",
					}}
					aria-label="open drawer"
					onClick={onToogleDrawer}
				>
					<span className="text-[#5b6b79] pi pi-bars"></span>
				</button>
				<div className="flex items-center">
					{/* alerts */}
					<div className="ml-1 shrink-0 min-w-[44px]">
						<button
							className="b-0 bg-[#f3f5f7] box-border cursor-pointer h-11 inline-flex items-center justify-center m-0 outline-0 p-2 relative rounded-[8px] text-[#5b6b79] w-11 hover:bg-[#dbe0e5]"
							style={{
								textDecoration: "none",
								transition:
									"background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
							}}
							onClick={openAlerts}
						>
							<span className="pi pi-bell"></span>
							<span
								className="absolute bg-[#2ca87f] box-border flex flex-wrap items-center justify-center h-4 leading-1 right-[4px] rounded-full p-1 text-xs text-white top-[2px] w-4 z-10"
								style={{ transform: "scale(1) translate(50%, -50%)" }}
							>
								2
							</span>
						</button>
						{alerts && (
							<div
								className=""
								style={{
									inset: "0px 0px auto auto",
									margin: "0px",
									position: "absolute",
									transform: "translate3d(-64px, 68px, 0px)",
								}}
							>
								<div>
									<div
										className="origin-top-right"
										style={{
											opacity: "1",
											transform: "none",
											transition:
												"opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms cubic-bezier(0.4, 0, 0.2, 1)",
										}}
									>
										<div
											className="bg-white max-w-[450px] min-w-[420px] rounded-[12px] w-[450px] text-[#1d2630]"
											style={{
												boxShadow: "0px 8px 24px rgba(19, 25, 32, 0.08)",
												transition:
													"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
											}}
										>
											<div
												className="bg-white border-0 border-[rgba(219, 224, 229, 0.65)] overflow-hidden relative rounded-[12px] shadow-none text-[#1d2630]"
												style={{
													transition:
														"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
												}}
											>
												<div className="p-6">
													<div className="flex items-center justify-between">
														<h5 className="font-semibold text-md">
															Notificaciones
														</h5>
														<span className="text-sm">
															Marcas todos como leídos
														</span>
													</div>
													<div className="flex flex-col gap-y-2 py-6">
														<div className="bg-white border border-[#dbe0e5a6] cursor-pointer flex items-start p-3 rounded-[12px] hover:bg-[#dbe0e5a6]">
															<div className="min-w-[56px] shrink-0">
																<div className="border border-[#dbe0e5a6] flex h-10 items-center justify-center rounded-full w-10">
																	<span className="pi pi-gift"></span>
																</div>
															</div>
															<div
																className="min-w-0"
																style={{ flex: "1 1 auto" }}
															>
																<h6 className="text-sm">
																	Es el cumpleaños de tu vieja.
																</h6>
																<p className="text-xs">Hace 2 min</p>
															</div>
															<div>
																<p className="pl-2 pt-[4px] text-xs">3:00 AM</p>
															</div>
														</div>
														<div className="bg-white border border-[#dbe0e5a6] cursor-pointer flex items-start p-3 rounded-[12px] hover:bg-[#dbe0e5a6]">
															<div className="min-w-[56px] shrink-0">
																<div className="border border-[#dbe0e5a6] flex h-10 items-center justify-center rounded-full w-10">
																	<span className="pi pi-gift"></span>
																</div>
															</div>
															<div
																className="min-w-0"
																style={{ flex: "1 1 auto" }}
															>
																<h6 className="text-sm">
																	Es el cumpleaños de tu vieja.
																</h6>
																<p className="text-xs">Hace 2 min</p>
															</div>
															<div>
																<p className="pl-2 pt-[4px] text-xs">3:00 AM</p>
															</div>
														</div>
														<div className="bg-white border border-[#dbe0e5a6] cursor-pointer flex items-start p-3 rounded-[12px] hover:bg-[#dbe0e5a6]">
															<div className="min-w-[56px] shrink-0">
																<div className="border border-[#dbe0e5a6] flex h-10 items-center justify-center rounded-full w-10">
																	<span className="pi pi-gift"></span>
																</div>
															</div>
															<div
																className="min-w-0"
																style={{ flex: "1 1 auto" }}
															>
																<h6 className="text-sm">
																	Es el cumpleaños de tu vieja.
																</h6>
																<p className="text-xs">Hace 2 min</p>
															</div>
															<div>
																<p className="pl-2 pt-[4px] text-xs">3:00 AM</p>
															</div>
														</div>
														<div className="bg-white border border-[#dbe0e5a6] cursor-pointer flex items-start p-3 rounded-[12px] hover:bg-[#dbe0e5a6]">
															<div className="min-w-[56px] shrink-0">
																<div className="border border-[#dbe0e5a6] flex h-10 items-center justify-center rounded-full w-10">
																	<span className="pi pi-gift"></span>
																</div>
															</div>
															<div
																className="min-w-0"
																style={{ flex: "1 1 auto" }}
															>
																<h6 className="text-sm">
																	Es el cumpleaños de tu vieja.
																</h6>
																<p className="text-xs">Hace 2 min</p>
															</div>
															<div>
																<p className="pl-2 pt-[4px] text-xs">3:00 AM</p>
															</div>
														</div>
													</div>
													<div className="flex justify-center">
														<a className="text-xs" href="#">
															Ver todo
														</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					{/* userProfile */}
					<div className="ml-[6px] shrink-0 min-w-[44px]">
						<button
							className="b-0 bg-[#f3f5f7] box-border cursor-pointer h-11 inline-flex items-center justify-center m-0 outline-0 p-2 relative rounded-[8px] text-[#5b6b79] w-11 hover:bg-[#dbe0e5]"
							style={{
								textDecoration: "none",
								transition:
									"background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
							}}
							onClick={openUserProfile}
						>
							<span className="pi pi-user"></span>
						</button>
						{userProfile && (
							<div
								className=""
								style={{
									inset: "0px 0px auto auto",
									margin: "0px",
									position: "absolute",
									transform: "translate3d(-64px, 68px, 0px)",
								}}
							>
								<div>
									<div
										className="origin-top-right"
										style={{
											opacity: "1",
											transform: "none",
											transition:
												"opacity 150ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms cubic-bezier(0.4, 0, 0.2, 1)",
										}}
									>
										<div
											className="bg-white max-w-[290px] min-w-[240px] rounded-[12px] w-[290px] text-[#1d2630]"
											style={{
												boxShadow: "0px 8px 24px rgba(19, 25, 32, 0.08)",
												transition:
													"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
											}}
										>
											<div
												className="bg-white border-0 border-[rgba(219, 224, 229, 0.65)] overflow-hidden relative rounded-[12px] shadow-none text-[#1d2630]"
												style={{
													transition:
														"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
												}}
											>
												{/* user title */}
												<div className="border-b border-[#F0F0F0] p-6 pl-5 pr-5 pt-6">
													<div className="box-border flex flex-wrap items-center justify-between w-full">
														<div className="box-border m-0">
															<div className="flex items-center">
																<div className="flex h-10 items-center leading-1 overflow-hidden relative rounded-[50%] shrink-0 w-10">
																	<img
																		src={user?.avatar ?? UserAvatar}
																		alt="Sandalio Meltronco Avatar"
																	/>
																</div>
																<div className="flex flex-col m-0 ml-[10px] text-[#5b6b79]">
																	<h6 className="font-semibold text-sm">
																		{user?.fullName ?? "Cargando..."}
																	</h6>
																	<p className="text-xs capitalize">
																		{user?.role ?? "Rol"}
																	</p>
																</div>
															</div>
														</div>
													</div>
												</div>
												{/* user menu */}
												<div className="p-2">
													<nav
														className="m-0 p-0 relative "
														style={{ listStyle: "none" }}
													>
														<div
															className="align-middle bg-transparent border-0 cursor-pointer flex items-center mx-0 my-1 outline-0 py-2 pl-4 pr-4 w-full hover:bg-[#F8F9FA]"
															style={{ justifyContent: "flex-start" }}
														>
															<div className="inline-flex items-center justify-centershrink-0 w-[32px]">
																<span className="pi pi-user-edit"></span>
															</div>
															<span className="text-xs m-0">Editar perfil</span>
														</div>
														<div
															className="align-middle bg-transparent border-0 cursor-pointer flex items-center mx-0 my-1 outline-0 py-2 pl-4 pr-4 w-full hover:bg-[#F8F9FA]"
															style={{ justifyContent: "flex-start" }}
															onClick={handleLogout}
														>
															<div className="inline-flex items-center justify-centershrink-0 w-[32px]">
																<span className="pi pi-sign-out text-red-500"></span>
															</div>
															<span className="text-xs m-0">Logout</span>
														</div>
													</nav>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
