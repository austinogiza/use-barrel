import React from "react"
import styled from "styled-components"

import type { FC } from "react"
import { ArrowLeft, ArrowRight } from "iconsax-react"
import SummaryDivider from "./summary-divider"
interface PaginationProps {
  maxPage: number
  setPage: (value: any) => void
  page: number
}

interface PaginationActiveProps {
  active?: boolean
}
const SitePagination: FC<PaginationProps> = (props) => {
  const { maxPage, setPage, page } = props

  return (
    <>
      {" "}
      <div className="w-full my-2">
        {" "}
        <SummaryDivider />
      </div>{" "}
      <TokensTablePagination active={maxPage > 1}>
        <TokenLeftCover
          className="bg-white shadow border-[0.5px] border-neutral-50 shadow-slate-100 hover:shadow-xl transition duration-500 ease-in-out px-3 py-2 rounded-lg flex items-center justify-center"
          onClick={() => {
            setPage(page === 1 ? page : page - 1)
          }}
        >
          <TokenLeftArrow />
        </TokenLeftCover>
        <TokenTypeBody>{"Page " + page + " of " + maxPage}</TokenTypeBody>

        <TokenRightCover
          className="bg-white shadow border-[0.5px] border-neutral-50 shadow-slate-100 hover:shadow-xl transition duration-500 ease-in-out px-3 py-2 rounded-lg flex items-center justify-center"
          onClick={() => {
            setPage(page === maxPage ? page : page + 1)
          }}
        >
          <TokenRightArrow />
        </TokenRightCover>
      </TokensTablePagination>
    </>
  )
}
const TokensTablePagination = styled.div<PaginationActiveProps>`
  display: ${(props) => (props.active ? `flex` : `none`)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 260px;
  margin: 24px auto;
`

const TokenRightCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 4px 16px;
  width: 44px;
  height: 36px;

  border-radius: 10px;
  margin: 0;
  transition: 0.4s ease-in;
`
const TokenLeftCover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 4px 16px;
  width: 44px;
  height: 36px;
  border-radius: 10px;
  margin: 0;
  transition: 0.4s ease-in;
`

const TokenRightArrow = styled(ArrowRight)`
  margin: 0;
  width: 20px;
  height: 20px;
  transition: 0.4s ease-in;
`

const TokenLeftArrow = styled(ArrowLeft)`
  margin: 0;
  width: 20px;
  height: 20px;
  transition: 0.4s ease-in;
`

const TokenTypeBody = styled.h2`
  margin: 0 24px;
`

export default SitePagination
