const BlockchainStatus = ({ hash }) => {
    return (
      <div className="p-4 text-center">
        {hash ? (
          <div>
            <h3>Image Processed!</h3>
            <p>Blockchain Hash: {hash}</p>
          </div>
        ) : (
          <p>No image processed yet.</p>
        )}
      </div>
    );
  };
  
  export default BlockchainStatus;
  