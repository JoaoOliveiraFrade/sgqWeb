--status teste

select distinct Status_Atual as Nome
 from alm_defeitos where status_atual in('ON_RETEST', 'PENDENT (RETEST)', 'REJECTED')  order by 1

 --agentes
select distinct 
	Encaminhado_Para as Nome, 
	
	(case when Encaminhado_Para = 'SISRAF - CADASTRO DE FATURAMENTO - ACCENTURE' then 'SISRAF - CAD.FAT - ACCENTURE'
		  when Encaminhado_Para = 'PAINEL DE PORTABILIDADE NUMÉRICA - CLEARTECH' then 'PAINEL PORT.NUM - CLEARTECH'
		  when Encaminhado_Para = '(OI R2) CLARIFY - AMBIENTE OPEN - ACCENTURE' then '(OI R2) CLARIFY-AMB.OP.-ACCENTURE'
		  when Encaminhado_Para = 'SOM - SERVICE ORDER MANAGEMENT - IBM' then 'SOM - SERV.ORDER MAN. - IBM'
		  when Encaminhado_Para = 'INFORMÁTICA - INTEGRAÇÃO - ACCENTURE' then 'INFORMÁTICA-INT.-ACCENTURE'
		  when Encaminhado_Para = 'INFORMÁTICA - INTEGRAÇÃO - IBM' then 'INFORMÁTICA-INTEG.- IBM'
		  when Encaminhado_Para = 'INFORMÁTICA - INTEGRAÇÃO - OI' then 'INFORMÁTICA-INTEG.- OI'
		  when Encaminhado_Para = 'GATEWAY DE PORTABILIDADE - CLEARTECH' then 'GATEWAY DE PORT.- CLEARTECH'
		  when Encaminhado_Para = 'SISTEMAS DA ENGENHARIA - ENGENHARIA' then 'SIST.ENG.-ENGENHARIA'
		  when Encaminhado_Para = 'SIEBEL INFORMACIONAL - ACCENTURE' then 'SIEBEL INFORM.- ACCENTURE'
		  when Encaminhado_Para = 'NOTA FISCAL ELETRONICA - NEOGRID' then 'NOTA FIS.ELET. - NEOGRID'
		  when Encaminhado_Para = 'PRINTCENTER - ÁREA DE NEGÓCIOS' then 'PRINTCENTER - ÁREA DE NEG.'
		  
		else Encaminhado_Para
	end) as Nome_Abreviado

from 
	alm_defeitos 
where 
	status_atual not in('CLOSED', 'CANCELLED') 
order by 1

--faroes
SELECT * FROM [SGQ_Defeitos_Farol]

--status fab. desenv
select  distinct  
	Status_Atual as Nome
from 
	alm_defeitos 
where status_atual not in('CLOSED', 'CANCELLED','ON_RETEST', 'PENDENT (RETEST)', 'REJECTED')  order by  1

--status fab. teste
select distinct Status_Atual as Nome
from alm_defeitos 
where status_atual in('ON_RETEST', 'PENDENT (RETEST)', 'REJECTED')  order by 1


--releases com projecto
select 
	Nome,
	Sigla
from
	( 
		select distinct
			(select Nome from SGQ_Meses m WITH (NOLOCK) where m.id = re.release_mes) + '-' + convert(varchar(4), re.release_ano) as Nome,
			(select sigla from SGQ_Meses m WITH (NOLOCK) where m.id = re.release_mes) + '-' + convert(varchar(4), re.release_ano) as sigla,
			re.release_ano as Ano,
			re.release_mes as mes
		from 
			sgq_releases_entregas re WITH (NOLOCK)
	) as Aux
order by
	Ano desc, 
	Mes desc

--gerencia N3
select distinct 
	Gerencia_N3 as Id,
	replace(replace(replace(replace(replace(replace(replace(Gerencia_N3,'SOLUCOES','SOL'),'EMPRESARIAL','EMP'),'FATURAMENTO','FAT'),'APLICACAO','APLIC'),'PRODUTOS','PROD'),'PLANEJAMENTO','PLAN'),'GESTAO','GEST') as Nome
from 
	SGQ_Releases_Entregas re WITH (NOLOCK)
	left join biti_Subprojetos sp WITH (NOLOCK)
		on sp.id = re.Subprojeto
    left join biti_usuarios us WITH (NOLOCK)
		on us.id = sp.lider_tecnico_id 
order by 1


--classificação <ESPECIAL/RELEASE>
select distinct 
	Classificacao_Nome as Nome 
from 
	biti_Subprojetos WITH (NOLOCK)
order by 1

--projetos
select distinct
	re.Subprojeto + '-' + re.Entrega  as Id, 
	convert(varchar, cast(substring(re.Subprojeto,4,8) as int)) + ' ' + convert(varchar,cast(substring(re.Entrega,8,8) as int)) as Projeto,
	left(sp.Nome,30) as Nome,
	sp.Classificacao_Nome as Classificacao,
	(select Sigla from sgq_meses m where m.id = re.release_mes) + ' ' + convert(varchar, re.release_ano)	as Release,
	replace(replace(replace(replace(replace(replace(replace(Gerencia_N3,'SOLUCOES','SOL'),'EMPRESARIAL','EMP'),'FATURAMENTO','FAT'),'APLICACAO','APLIC'),'PRODUTOS','PROD'),'PLANEJAMENTO','PLAN'),'GESTAO','GEST') as Gerencia_N3
from 
	SGQ_Releases_Entregas re WITH (NOLOCK)
	left join biti_Subprojetos sp WITH (NOLOCK)
		on sp.id = re.Subprojeto
    left join biti_usuarios us WITH (NOLOCK)
		on us.id = sp.lider_tecnico_id 
where
	re.id = (select top 1 re2.id from  SGQ_Releases_Entregas re2 where re2.subprojeto = re.subprojeto and re2.entrega = re.entrega order by re2.release_ano desc, re2.release_mes desc) --and
	--{Condicao_Gerencia_N3} and
	--{Condicao_Classificacao} and
	--{Condicao_Release} 
order by 1
