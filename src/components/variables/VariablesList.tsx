import { FunctionComponent, useState } from "react";
import { Tabs, Tab, Button, Icon, TabId } from "@blueprintjs/core";

import Variables from "./Variables";
import { useStore } from "../../store";
import { TVariable } from "../../types";
import { getVariables, getVariablesNames } from "../../store/selector";
import { ADD_VARIABLE_LIST, REMOVE_VARIABLE_LIST } from "../../store/actions";

const VariablesList: FunctionComponent = () => {
  let deletedTabId: TabId | null = null;

  const { dispatch } = useStore();
  const variablesList = getVariables();
  const variablesNames = getVariablesNames();
  const [selectedTabId, setSelectedTabId] = useState<TabId>("0");

  const handleTabDelete = (index: number) => {
    deletedTabId = `${index}`;
    dispatch({ type: REMOVE_VARIABLE_LIST, payload: { index } });
  };

  const handleTabChange = (
    newTabId: TabId,
    prevTabId?: TabId
  ) => {
    const changeTab = () => {
      if (!prevTabId || !deletedTabId) {
        setSelectedTabId(newTabId);
        return;
      }

      if (prevTabId < deletedTabId && newTabId === deletedTabId) {
        setSelectedTabId(prevTabId);
        return;
      }

      setSelectedTabId(newTabId);
    };

    setTimeout(changeTab, 10);
  };

  const renderTabTitle = (name: string, index: number) => {
    return (
      <div className="variables-list-tab-title">
        <span>{name}</span>
        {" "}
        {
          variablesList.length > 1 && (
            <Icon
              icon="small-cross"
              onClick={() => handleTabDelete(index)}
            />
          )
        }
      </div>
    );
  };

  return (
    <Tabs
      id="variables-list-container"
      selectedTabId={selectedTabId}
      onChange={handleTabChange}
      large
    >
      {
        variablesList.map((variables: TVariable[], index: number) => {
          return (
            <Tab
              key={`tab-${index}`}
              id={`${index}`}
              title={renderTabTitle(variablesNames[index], index)}
              panel={
                <Variables
                  listIndex={index}
                  variables={variables}
                />
              }
            />
          );
        })
      }
      <Button
        onClick={() => dispatch({ type: ADD_VARIABLE_LIST })}
        className="add-variables"
        icon="plus"
        minimal
        small
      />
    </Tabs>
  );
};

export default VariablesList;
