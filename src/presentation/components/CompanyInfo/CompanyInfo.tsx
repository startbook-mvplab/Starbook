import React, { FC, useContext, useEffect, useState } from 'react';

import { Grid, Stack, Typography } from '@mui/material';
import CustomIcon from '../CustomIcon/CustomIcon';
import { CustomIconButton } from '../CustomIconButton';
import { PersonAvatarInfo } from '../PersonAvatarInfo';
import { IconTextItem } from '../IconTextItem';
import { ICompanyInfo, IStartup } from '@/data/models';
import { ISocio } from '@/data/interfaces';
import Section from '../Section/Section';
import { RolEnum, StartupSections, showFieldWithValidation } from '@/presentation/utilities';


const pt = '15px';

export interface CompanyInfoProps {
	rol: RolEnum,
	startup?: IStartup
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ rol, startup }) => {




	return (
		<>
			{
				rol === RolEnum.startup &&
				<Section
					name={StartupSections.InformacionGeneral}
					sx={{
						display: 'flex',
						width: '100%',
					}}

				>
					<Grid
						alignItems="center"
						pr='50px'
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: "space-between",
							width: '100%'
						}}
					>
						<NameAndRol company={startup} />
						<Section name={StartupSections.Sector}>
							<Category company={startup} />
						</Section>
						<SocialNetworks company={startup} />
						<Section name={StartupSections.ContactoPrincipal}>
							<DateAndUserName company={startup} />
						</Section>
						<WebAndEmail company={startup} />
						<Section name={StartupSections.Socios}>
							<Partners company={startup} />
						</Section>

					</Grid>
				</Section>
			}

			{
				rol === RolEnum.inversionista &&
				<Grid
					alignItems="center"
					pr='40%'
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						width: { xs: '100%', sm: '100%' },
					}}
				>
					<NameAndRol company={startup!} />
					<Sector company={startup!} />
					<Partners company={startup!} />
				</Grid>

			}

			{
				(rol === RolEnum.academia || rol === RolEnum.aceleradora || rol == RolEnum.corporativo) &&
				<Grid
					alignItems="center"
					pr='20%'
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'space-between',
						width: { xs: '100%', sm: '100%' },
					}}
				>
					<NameAndRol company={startup} />
					<Sector company={startup} />
					<SocialNetworks company={startup} />
					<DateAndEmail company={startup} />
					<OnlyWeb company={startup} />
				</Grid>
			}

		</>
	);
};

export default CompanyInfo;




interface NameAndRolProps extends ICompanyInfo {
	titleVariant?: "h1" | "button" | "caption" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2",
	subtitlefontSize?: number,
}

export const NameAndRol: FC<NameAndRolProps> =
	({ titleVariant = 'h1', subtitlefontSize = 14, company }) => {
		return (
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				spacing={1}
				pt={pt}

			>
				<Stack
					direction="row"
					justifyContent="flex-start"
					alignItems="center"
					spacing={2}
				>
					<Typography variant={titleVariant} fontWeight='400'>
						{company?.startupName === '' ? '--' : company?.startupName}
					</Typography>
					<CustomIcon
						iconName='check'
						height={30}
						width={30}
					/>
				</Stack>
				<Typography fontSize={subtitlefontSize}>
					Startup
				</Typography>

			</Stack>
		)
	}


interface CategoryProps extends ICompanyInfo {
	textfontSize?: number,
}


export const Category: FC<CategoryProps> = ({ textfontSize = 14, company }) => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
			spacing={1}
			pt={pt}
		>
			<Typography fontSize={textfontSize}>
				Categoría
			</Typography>

			<Typography fontSize={textfontSize}>
				{company?.sector}
			</Typography>
		</Stack>
	)
}

interface SectorProps extends ICompanyInfo {
	titlefontSize?: number,
	subtitleVariant?: "h1" | "button" | "caption" | "h2" | "h3" | "h4" | "h5" | "h6" | "inherit" | "overline" | "subtitle1" | "subtitle2" | "body1" | "body2",

}

export const Sector: FC<SectorProps> =
	({ titlefontSize = 14, subtitleVariant = 'h4', company }) => {
		return (
			<Stack
				direction="column"
				justifyContent="center"
				alignItems="flex-start"
				spacing={1}
				pt={pt}
			>
				<Typography fontSize={titlefontSize}>
					Sector
				</Typography>

				<Typography variant={subtitleVariant}>
					{showFieldWithValidation(company?.sector)}
				</Typography>
			</Stack>
		)
	}


interface SocialNetworksProps extends ICompanyInfo {
	fontSize?: number,
}

export const SocialNetworks: FC<SocialNetworksProps> = ({ fontSize = 14, company }) => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
			spacing={1}
			pt={pt}

		>
			<Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
				spacing={0}
			>
				<CustomIconButton
					iconName='linkedin'
					href={company?.linkedin}
					height={12}
					width={12}
				/>
				<CustomIconButton
					iconName='facebook'
					href={company?.facebook}
					height={12}
					width={12}
				/>
				<CustomIconButton
					iconName='twitter'
					href={company?.twitter}
					height={12}
					width={12}
				/>
				<CustomIconButton
					iconName='instagram'
					href={company?.instagram}
					height={12}
					width={12}
				/>
			</Stack>

			<Typography fontSize={fontSize}>
				{showFieldWithValidation(company?.ciudad)}, {showFieldWithValidation(company?.pais_sede)}
			</Typography>

		</Stack>
	)
}

interface DateAndUserNameProps extends ICompanyInfo {
	fontSize?: number,
}

export const DateAndUserName: FC<DateAndUserNameProps> = ({ fontSize = 14, company }) => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
			spacing={1}
			pt={pt}

		>
			<IconTextItem
				iconName='calendar'
				text='1 de Julio de 2022' //{showField(company?.)}
				fontSize={fontSize}
			/>

			<IconTextItem
				iconName='user'
				text={showFieldWithValidation(company?.nombre_contacto_principal)}
				fontSize={fontSize}
			/>

		</Stack>
	)
}


interface WebAndEmailProps extends ICompanyInfo {
	fontSize?: number,
}

export const WebAndEmail: FC<WebAndEmailProps> = ({ fontSize = 14, company }) => {
	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
			spacing={1}
			pt={pt}

		>
			<IconTextItem
				iconName='web'
				text={showFieldWithValidation(company?.sitio_web)}
				fontSize={fontSize}
			/>
			<IconTextItem
				iconName='email'
				text={showFieldWithValidation(company?.email)}
				fontSize={fontSize}
			/>
		</Stack>
	)
}


interface PartnersProps extends ICompanyInfo {
	fontSize?: number,
}

export const Partners: FC<PartnersProps> = ({ fontSize, company }) => {

	const socios = company?.socio ?? [];



	return (
		<Stack
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
			spacing={0}
		>
			<Typography fontSize={fontSize}>
				Socios
			</Typography>
			<Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
				spacing={3}
			>
				{
					// socios !== undefined &&

					socios.map((e, index) =>

						<PersonAvatarInfo
							key={index}
							avatar='/no_user.png'
							name={e.nombre!}
							workPosition={e.cargo ?? ''}
							email={e.correo!}
							fontSize={fontSize}
						/>
					)
				}
				{/* <PersonAvatarInfo
					avatar='/no_user.png'
					name='Pedro Castro' //{showField(company?.)}
					workPosition='CTO'
					email='info@suprier.co'
					fontSize={fontSize}
				/> */}
				{/* <PersonAvatarInfo
					avatar='/no_user.png'
					name='Andrea Estrada' //{showField(company?.)}
					workPosition='COO'
					email='info@suprier.co'
					fontSize={fontSize}
				/> */}
			</Stack>
		</Stack>
	)
}



export const DateAndEmail: FC<ICompanyInfo> = ({ company }) => {
	return (

		<Stack
			direction="column"
			justifyContent="center"
			alignItems="flex-start"
			spacing={1}
			pt={pt}

		>
			<IconTextItem
				iconName='calendar'
				text='1 de Julio de 2022'
			/>
			<IconTextItem
				iconName='email'
				text='info@suprier.co'
			/>
		</Stack>
	)
}



const OnlyWeb: FC<ICompanyInfo> = ({ company }) => {
	return (
		<Stack
			direction="column"
			justifyContent="start"
			alignItems="flex-start"
			spacing={1}
			pt='5px'

		>
			<IconTextItem
				iconName='web'
				text='www.suprier.co'
			/>
			<br />
		</Stack>
	)
}





