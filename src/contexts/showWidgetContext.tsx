import { createContext, useContext, useEffect, useState } from "react";

const ShowWidgetContext = createContext<{
  showWidget: boolean;
  setShowWidget: (e: boolean) => void;
}>({
  showWidget: true,
  setShowWidget: () => {},
});

export const ShowWidgetContextProvider = ({ children }: any) => {
  const [showWidget, setShow] = useState(true);

  const setShowWidget = (e: boolean) => {
    localStorage && localStorage.setItem("showWidget", e.toString());
    setShow(e);
  }

  useEffect(() => {
      const val = localStorage.getItem("showWidget");
      console.log("showWidget", val);
    if(localStorage && localStorage.getItem("showWidget")){
        setShow(localStorage.getItem("showWidget") === "true");
    }
  },[localStorage])

  return (
    <ShowWidgetContext.Provider
      value={{
        showWidget,
        setShowWidget,
      }}
    >
      {children}
    </ShowWidgetContext.Provider>
  );
};

export const useShowWidget = () => useContext(ShowWidgetContext);
