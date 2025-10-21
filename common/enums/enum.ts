export enum OrderColors_e{
    '' = '',
    'Azul' = 'var(--color-blue)',
    'Verde' = 'var(--color-green)',
    'Vermelho' = 'var(--color-red)',
    'Amarelo' = 'var(--color-yellow)'
}

export enum ProductionStatus_e{
    InProduction = 'Em Produção',
    WaitingProduction = 'Aguardando Produção',
    LunchStop = 'Parada - Almoco',
    TrainingStop = 'Parada - Treinamento',
    PowerOutageStop = 'Parada - Queda de energia',
    OperatorChangeStop  = 'Parada - Troca de operador',
    MaintenanceStop = 'Parada - Manutenção'
}

export enum ProductionStatusColor_e{
    InProduction = 'var(--color-sucess)',
    WaitingProduction = 'var(--color-dark-gray-200)',
    Stop = 'var(--color-error)'
}