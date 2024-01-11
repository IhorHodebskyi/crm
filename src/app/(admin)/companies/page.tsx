import Header from '@/app/components/header';
import React from 'react';
import Toolbar from '../../components/toolbar';
import SearchInput from '../../components/search-input';
import AddCompanyButton from '../../components/add-company-button';
import CompanyTable from '../../components/company-table';

export interface PageProps {
  params: { id: string[] };
}

export default async function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable></CompanyTable>
    </>
  );
}
