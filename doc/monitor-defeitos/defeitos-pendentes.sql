--defeitos pendentes
select * 
	    from( 
		    select *,  
		        case 
		        when Farol =   '5-Selecao_Dedo_Roxo.png' then 'Roxo'
		        when Farol =   '4-Selecao_Dedo_Vermelho.png' then 'Vermelho' 
		        when Farol =   '2-Selecao_Dedo_Amarelo.png' then 'Amarelo'
		        when Farol =   '1-Selecao_Dedo_Verde.png' then 'Verde'end as Cor
        from
            (
            select
                Id,
	            case when Severidade = 'HIG'
		            then
			            case when round(Temp_ult_Ag,0) <= 1  then '1-Selecao_Dedo_Verde.png'
				            when round(Temp_ult_Ag,0) >= 2 and round(Temp_ult_Ag,0) <= 3 then '2-Selecao_Dedo_Amarelo.png'
				            when round(Temp_ult_Ag,0) >= 4 and round(Temp_ult_Ag,0) <= 5 then '4-Selecao_Dedo_Vermelho.png'
				            when round(Temp_ult_Ag,0) >= 6 then '5-Selecao_Dedo_Roxo.png'
			            end 
		            when Severidade = 'MED'
		            then
			            case when round(Temp_ult_Ag,0) <= 4  then '1-Selecao_Dedo_Verde.png'
				            when round(Temp_ult_Ag,0) >= 5 and round(Temp_ult_Ag,0) <= 7 then '2-Selecao_Dedo_Amarelo.png'
				            when round(Temp_ult_Ag,0) >= 8 and round(Temp_ult_Ag,0) <= 10 then '4-Selecao_Dedo_Vermelho.png'
				            when round(Temp_ult_Ag,0) >= 11 then '5-Selecao_Dedo_Roxo.png'
			            end 
		            when Severidade = 'LOW'
		            then
			            case when round(Temp_ult_Ag,0) <= 11  then '1-Selecao_Dedo_Verde.png'
				            when round(Temp_ult_Ag,0) >= 12 and round(Temp_ult_Ag,0) <= 15 then '2-Selecao_Dedo_Amarelo.png'
				            when round(Temp_ult_Ag,0) >= 16 and round(Temp_ult_Ag,0) <= 19 then '4-Selecao_Dedo_Vermelho.png'
				            when round(Temp_ult_Ag,0) >= 20 then '5-Selecao_Dedo_Roxo.png'
			            end 
	            end as Farol,
	            Subprojeto,
	            Entrega,
                convert(varchar, Subprojeto) + ' ' + convert(varchar, Entrega) as Projeto,
	            Defeito,
	            Nome,
	            Ciclo,
	            Abertura,
	            Sistema,
	            Origem,
	            Status,
                (case 
		            when Fila in('LIDER TECNICO','RESP TECNICO', 'SOA – OI','INFOR. - INT. - OI','NDS – OI','TDM - OI') then 'CSOL'
		            when Fila = 'GA - OI' then 'GA - OI'
		            when Fila in ('SISRAF - ARRECADAÇÃO - IBM','SISRAF - CONTABILIZAÇÃO - IBM', 'INFOR. - INT. - IBM', 'MEDIAÇÃO MÓVEL - MM - IBM','SOM - SERVICE ORDER MANAGEMENT - IBM','SISRAF - APROPRIAÇÃO - IBM','SISRAF - ATENDIMENTO DE CONTA - IBM','INFOR. - DW - IBM','FABRICA DE TESTE – IBM', 'FGC - FATURAMENTO - IBM', 'SISRAF - FATURAMENTO - IBM','MEDIAÇÃO FIXA - MM - IBM','SISRAF - MPN - IBM','SISRAF - PARCELAMENTO - IBM' ) then 'IBM'
		            when Fila in('E-CHANNEL - ACC','CLICK - MUA - ACC','(OI R2) CLARIFY - AMBIENTE OPEN - ACC','SISRAF - CADASTRO DE FATURAMENTO - ACC','INFOR. - INT. - ACC','OSVC – ACC','CLICK - PO - ACC') then 'ACC'
		            when Fila in('VAS – PTI','VASPROXY – PTI','LISA – PTI','PORTAL M2M – PTI','PORTAL VAS – PTI') then 'PTI'
		            when Fila in('OSVC – MAKSEN') then 'MAKSEN'
		            when Fila in('PW.SATI - SOLUÇÕES FISCAIS - SONDA PROCWORK') then 'SONDA PROCWORK'
		            when Fila in('PRINTCENTER - ÁREA DE NEGÓCIOS') then 'ÁREA DE NEGÓCIOS'
		            when Fila in('LIDER FUNCIONAL','LÍDER FUNCIONAL') then 'LIDER FUNCIONAL'
		            when Fila in('OI PLAY – SMART BOX') then 'SMART BOX'
		            when charindex('-', Fila) > 0 then substring(Fila,charindex('-', Fila)+2,10)
		            else Fila
	            end) as Agente,
	            Fila,
                (case 
	                    when Severidade = 'HIG' then 1
	                    when Severidade = 'MED' then 2
	                    else 3
	            end) as Severidade_nivel,
	            Severidade,
	            [Agind(h)],
				Temp_ult_Ag,
                Aging_ult_ag_soma,
                Ping_Pong,
                Qtd_CTs_Impactados,
                Risco_Projeto
            from
	            (
		            select 
                        Subprojeto + '-' +Entrega + '-' + convert(varchar, Defeito) as Id,
			            cast(substring(d.Subprojeto,4,8) as int) as Subprojeto,
			            cast(substring(d.Entrega,8,8) as int) as Entrega,
			            Defeito,
			            d.Nome,
			            Ciclo,
			            Dt_Inicial as Abertura,
			            replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(Sistema_Defeito,'ENGENHARIA','ENG'),'INFORMACIONAL','INF.'),'INFORMÁTICA','INFOR.'),'FATURAMENTO','FAT.'),'ACCENTURE','ACC'),'INTEGRAÇÃO','INT.'),'REQUERIMENTO','REQ.'),'MARKETING','MKT'),'METATRON','META'),'SISTEMAS','SIST.') as Sistema,
			            replace(replace(replace(replace(replace(Origem,'DESENHO DA SOLUÇÃO','DES.SOL'),'IMPROCEDENTE','IMPROC.'),'CONSTRUÇÃO','CONST.'),'AMBIENTE','AMB.'),'PRODUÇÃO','PROD.') as Origem,
			            replace(replace(replace(replace(replace(replace(Status_Atual,'IN_PROGRESS','IN PRG'),'PENDENT (PROGRESS)','PEND PRG'),'PENDENT (RETEST)','PEND RET'),'ON_RETEST','ON RET'),'REJECTED','REJ.'),'MIGRATE','MIG.') as Status,
			            replace(replace(replace(replace(replace(replace(replace(replace(replace(replace(Encaminhado_Para,'ENGENHARIA','ENG'),'INFORMACIONAL','INF.'),'INFORMÁTICA','INFOR.'),'RESPONSAVEL','RESP'),'ACCENTURE','ACC'),'INTEGRAÇÃO','INT.'),'REQUERIMENTO','REQ.'),'MARKETING','MKT'),'METATRON','META'),'SISTEMAS','SIST.') as Fila,
			            substring(Severidade,3,3) as Severidade,
			            round(
				            cast(
						            (select Sum(Tempo_Util) 
						            from ALM_Defeitos_Tempos dt WITH (NOLOCK)
						            where dt.Subprojeto = d.Subprojeto and 
								            dt.Entrega = d.Entrega and 
								            dt.Defeito = d.Defeito)
				            as float) / 60, 1
			            ) as [Agind(h)],
						round(
				            cast(
								(select sum(Teste)	
									from(
									select *,
									rank() OVER (ORDER BY convert(datetime, Data, 5) desc) as id2
										from(
										select
												*,     
																
												case when Id = 1 then tempo_util
												else
													(case when Id >=
															(
																select top 1 id
																
																from
																(
																select 
																	rank() OVER (ORDER BY convert(datetime, dt_ate, 5) desc) as id,
																	DT_ATE as Data,
																	status, 
																	encaminhado_para, 
																	tempo_util
																from
																	alm_defeitos_tempos dt
																where
																		dt.Subprojeto = d.Subprojeto and 
																			dt.Entrega = d.Entrega and 
																			dt.Defeito = d.Defeito
																	
																) a
																	where  
																	a.encaminhado_para = 
																		(select top 1
																				encaminhado_para
																		from
																				alm_defeitos_tempos dt
																		where
																			dt.Subprojeto = d.Subprojeto and 
																				dt.Entrega = d.Entrega and 
																				dt.Defeito = d.Defeito
																			 
																		order by
																				convert(datetime, dt_ate, 5) desc) and
																				status in ('REJECTED','ON_RETEST', 'PENDENT (RETEST)') )
													then '' 
													else tempo_util end)
													end as Teste
		
										from
												(
												select 
													rank() OVER (ORDER BY convert(datetime, dt_ate, 5) desc) as id,
													dt_ate as Data,
													status, 
													encaminhado_para, 
													tempo_util
												from
													alm_defeitos_tempos dt
												where
														dt.Subprojeto = d.Subprojeto and 
								                            dt.Entrega = d.Entrega and 
								                            dt.Defeito = d.Defeito
																
												) a
										where  
												a.encaminhado_para = 
													(select top 1
															encaminhado_para
													from
															alm_defeitos_tempos dt
													where
																dt.Subprojeto = d.Subprojeto and 
																	dt.Entrega = d.Entrega and 
																	dt.Defeito = d.Defeito
																			
													order by
															convert(datetime, dt_ate, 5) desc))b)c
															where id <= id2)
										as float) / 60, 1) as Temp_ult_Ag,
		                    round(
                                    cast(
										(select 
													sum(tempo_util)
											from
													(
      
															select 
																rank() OVER (ORDER BY convert(datetime, dt_ate, 5) desc) as id,
																dt_ate,
																status, 
																encaminhado_para, 
																tempo_util
															from
																alm_defeitos_tempos
															where
																	subprojeto = d.subprojeto and
																	Entrega = d.Entrega and 
																	Defeito = d.Defeito and
																status not in ('REJECTED', 'ON_RETEST', 'PENDENT (RETEST)')
															) a
													where  
															a.encaminhado_para = 
																(select top 1
																		encaminhado_para
																from
																		alm_defeitos_tempos
																where
																		subprojeto = d.subprojeto and
																		Entrega = d.Entrega and 
																		Defeito = d.Defeito and
																		status not in ('REJECTED', 'ON_RETEST', 'PENDENT (RETEST)')
																order by
																		convert(datetime, dt_ate, 5) desc) )
																		as float)/60,1
																		) as Aging_ult_ag_soma,
			            d.Ping_Pong,
                        d.Qtd_CTs_Impactados,
                        (select Risco from (select Subprojeto, Entrega, Risco, release_mes from SGQ_Releases_Entregas re  where id in (select max(id) as idMax from [SGQ_Releases_Entregas] where Release_ano = 2017 and risco <> '' group by Subprojeto+Entrega) and re.Subprojeto = d.Subprojeto and re.Entrega = d.Entrega)aux) as Risco_Projeto
		            from 
			            ALM_Defeitos d WITH (NOLOCK)
			            left join BITI_Subprojetos sp WITH (NOLOCK)
				            on sp.id = d.subprojeto
		            where
			            --{Condicao_Filas}
			            --{Condicao_Status_Dev}
			            --{Condicao_Projeto}
			            --status_atual not in('CLOSED', 'CANCELLED') or
						--{Condicao_Filas}
			            --{Condicao_Status_Test} 
			            --{Condicao_Projeto}
			            status_atual not in('CLOSED', 'CANCELLED')
	            ) Aux
            ) aux2
        --where
            --Agente = '@Agente_Atual' 
		) aux3
            where
                --{Condicao_Farois} and
                defeito <> (case when Subprojeto = '5841' and Entrega = '5542' then 33 else 0 end)
        order by
		14,
		case when 
            Fila in ('LIDER TECNICO', 'RESP TECNICO') then Sistema
			END,
        Risco_Projeto desc,
		15,
		18 desc