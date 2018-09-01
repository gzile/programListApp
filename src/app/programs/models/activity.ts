
export interface Activity    {
    url: string;
    id: number;
    products: Array<any>;
    contact: {};
    actual_start_date: Date;
    actual_end_date: Date;
    actual_duration: string;
    actual_cost: number;
    address: {};
    capacity_built: string;
    description: string;
    description_of_community_involvement: string;
    description_of_government_involvement: string;
    expected_end_date: Date;
    expected_start_date: Date;
    issues_and_challenges: string;
    justification_background: string;
    lessons_learned: string;
    level2_uuid: string;
    name: string;
    notes: string;
    parent_workflowlevel2: number;
    quality_assured: string;
    risks_assumptions: string;
    short_name: string;
    site_instructions: string;
    total_cost: number;
    total_estimated_budget: number;
    type: string;
    effect_or_impact: string;
    create_date: Date;
    edit_date: Date;
    status: string;
    progress: string;
    donor_currency: string;
    local_currency: string;
    milestone: string;
    office: string;
    sector: string;
    staff_responsible: string;
    workflowlevel1: string;
    created_by: string;
    approval: Array<any>;
    indicators: Array<any>;
    site: Array<any>;
    stakeholder: Array<any>;
    sub_sector: Array<any>;
}