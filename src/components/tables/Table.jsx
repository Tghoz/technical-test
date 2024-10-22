import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Spinner,
  Button,
  Divider,
} from "@nextui-org/react";
import { useAsyncList } from "@react-stately/data";

export default function App() {
  const [page, setPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  let list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setPage((prev) => prev + 1);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(
        cursor || "https://swapi.py4e.com/api/people/?search=",
        { signal }
      );
      let json = await res.json();

      if (!cursor) {
        setIsLoading(false);
      }

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const hasMore = page < 9;

  return (
    <Table
      isHeaderSticky
      aria-label="Example table with client side sorting"
      bottomContent={
        hasMore && !isLoading ? (
          <div className="flex w-full justify-center">
            <Button
              isDisabled={list.isLoading}
              variant="flat"
              onPress={list.loadMore}>
              {list.isLoading && <Spinner color="white" size="sm" />}
              Load More
            </Button>
          </div>
        ) : null
      }
      classNames={{
        base: "max-h-[590px] scroll",
        table: "min-h-[550px]",
      }}>
      <TableHeader>
        <TableColumn key="name">Name</TableColumn>
      </TableHeader>
      <TableBody
        isLoading={isLoading}
        items={list.items}
        loadingContent={<Spinner label="Loading..." />}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => (
              <TableCell>
                {getKeyValue(item, columnKey)}
                <Divider className="my-1" />
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
