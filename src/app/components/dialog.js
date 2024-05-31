import Mask from "../components/common/mask"
export default function Dialog({ className, children, active, onClose }) {
  if (active) {
    return (<div>
      <Mask onClick={onClose}></Mask>
      <div className={`max-w-sm fixed bg-slate-50 rounded left-0 right-0 top-1/2 transform -translate-y-1/2 mx-auto p-5 z-40 ${className}`}>
        {children}
      </div>
    </div>
    )
  }
}